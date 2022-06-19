import React, { useState } from 'react';
import styles from './index.module.css';
import { Button, Input, Radio, Toast } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'
import { Vertify } from '@alex_xu/react-slider-vertify';
import { Navigate, useNavigate } from 'react-router-dom'
import UserModel from "../../models/User/UserModel";
import { loginAPI, getUserInfoAPI } from '../../api/user';
import { createModuleResolutionCache, isConstructorDeclaration } from 'typescript';

let url = `https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png`;
const regRex = /^1[3-9]\d{9}$/;
function Login() {
    const { user, login } = UserModel();
    const navigate = useNavigate();
    const [value, setValue] = useState(''); // phone
    const [pin, setPin] = useState(''); // pin 
    const [status, setStatus] = useState(false);
    const [visible, setVisible] = useState(false);
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
    const handleRegist = async ()=> {
        const res = await loginAPI({
            "pin": Math.random(),
            "pwd": "",
            "tel": value
        })
        console.log(res, 222);
    }
    const handleSuccess = ()=> {
        let pinList = [];
        for(let i = 0; i < 6; i++){
            pinList.push(Math.round(Math.random()*10))
        }
        console.log(pinList.join(''));
        setPin(pinList.join(''));
        setVisible(false);
        Toast.show({
            icon: 'success',
            content: '验证码发送成功',
        });
    }
    const handleLogin = async ()=> {
        const res = await loginAPI({
            pin: 123456,
            pwd: '',
            tel: value
        });
        console.log(res);
        const { data } = res;
        const { msg } = data;
        login(data.data.user);
        // const res = await getUserInfoAPI({
        //     id: 'xxxx'
        // })
        Toast.show({
            content: msg,
        });
        navigate(-1);
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
                    { pin && <p className={styles.login_code}>验证码：{ pin }</p> }
                    {/* <Button onClick={testLogin}>login</Button> */}
                    {
                        !pin ?
                        <Button className={styles.login_qrcode} onClick={show}>发送短信验证码</Button>
                        :
                        <Button className={styles.login_qrcode} onClick={handleLogin}>登录</Button>
                    }
                    {
                        visible && 
                        <div className={styles.qrcode_mask}>
                            <div className={styles.qrcode_vertify}>
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
                        </div>
                    }
                </div>
           </div>
        </>
    )
}
export default Login;