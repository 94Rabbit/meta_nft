import { useState } from 'react';
import styles from './index.module.css';
import { Button, Input, Radio, Toast } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'
import { Vertify } from '@alex_xu/react-slider-vertify';
import { useNavigate } from 'react-router-dom'
import UserModel from "../../models/User/UserModel";
import { loginAPI, getVertifyCodeAPI } from '../../api/user';
import { NumberKeyboard, PasscodeInput, Modal, Mask } from 'antd-mobile'

let url = `https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png`;
const regRex = /^1[3-9]\d{9}$/;
let _code = 0;
function Login() {
    const { user, login } = UserModel();
    const navigate = useNavigate();
    const [value, setValue] = useState(''); // phone
    const [pin, setPin] = useState(''); // pin 
    const [status, setStatus] = useState(false);
    const [visible, setVisible] = useState(false);
    const [code, setCode] = useState('');
    const show = () => {
        if(!value){
            Toast.show({
                icon: 'fail',
                content: '手机号不能为空',
            })
            return;
        }
        if(!regRex.test(value)){
            Toast.show({
                icon: 'fail',
                content: '手机号格式错误',
            });
            return;
        }
        if(!status){
            Toast.show({
                icon: 'fail',
                content: '请勾选用户协议',
            });
            return;
        }
        setVisible(true);
      };
    const handleVertify = (text:string)=> {
        Toast.show({
            content: text,
            afterClose: () => {},
        });
        setVisible(false);
    }
    const handleSuccess = async () => {
        setVisible(false);
        // Toast.show({
        //     icon: 'success',
        //     content: '验证码发送成功',
        // });
        const res = await getVertifyCodeAPI(value);
        console.log(res, '验证码');
        setPin(res.data.data);
        alert(`验证码是${res.data.data}`);
        Modal.confirm({
            title: `输入验证码 ${res.data.data}`,
            content:  <PasscodeInput 
                            keyboard={<NumberKeyboard />} 
                            onChange={handleCodeChange} 
                            onFill={handleFill} />,
            showCloseButton: true,
            confirmText: '验证',
            onConfirm: () => {
                setTimeout(()=>{
                    handleLogin(_code);
                },1000)
            }
        })
  
    }
    const handleCodeChange = (e: string)=> {
        if(e.length !== 6) return;
        console.log(e, 333);
        // setCode(e);
        _code = Number(e);
    }
    const handleFill = ()=> {
        console.log(code, 'done');
    }
    const handleLogin = async (_pin: number)=> {
        const res = await loginAPI({
            pin: _pin,
            pwd: '',
            tel: value
        });
        const { data } = res;
        const { msg, success } = data;
        Toast.show({
            content: msg,
        });
        if(success) {
            login(data.data.user);
            navigate(-1);
        }
    }
    return (
        <>
           {
               
           }<div className={styles.login_container}>
                <CloseOutline color={'#fff'} className={styles.login_close} fontWeight={400} onClick={()=> {navigate(-1)}}/>
                <p className={styles.login_label}>手机号登录</p>
                <div className={styles.login_form}>  
                    <Input
                        className={styles.login_input}
                        placeholder='请输入手机号'
                        value={value}
                        onChange={val => {
                            setValue(val);
                        }}
                        clearable
                    />  
                    <span className={styles.login_tip}>未注册的手机号码将直接自动注册</span>
                    <div className={styles.login_protcol}>
                        <Radio
                            className={styles.login_check}
                            style={{
                                '--icon-size': '12px',
                                '--gap': '12px',
                            }}
                            onChange={val => {
                                console.log(val);
                                setStatus(val)
                            }}
                        >
                        </Radio>
                        <span className={styles.login_article}>
                            已阅读并同意《用户隐私协议》《隐私权政策》
                        </span>
                    </div>
                    {/* {
                        !pin ?
                        <Button className={styles.login_qrcode} onClick={show}>发送短信验证码</Button>
                        :
                        <Button className={styles.login_qrcode} onClick={()=>{handleLogin(code)}}>登录</Button>
                    } */}
                    <Button className={styles.login_qrcode} onClick={show}>发送短信验证码</Button>
                    {
                        <Mask 
                            visible={visible} 
                            onMaskClick={() => setVisible(false)}
                            color='white'
                            >
                            <div className={styles.overlayContent}>
                                <Vertify
                                    width={250}
                                    height={200}
                                    visible={visible}
                                    onSuccess={()=> {
                                        handleSuccess();
                                    }}
                                    onFail={()=> { 
                                        handleVertify('校验失败')
                                    }}
                                    onRefresh={() => {}}
                                />
                            </div>
                        </Mask>
                    }
                </div>
           </div>
        </>
    )
}
export default Login;