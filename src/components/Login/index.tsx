import React, { useState } from 'react';
import styles from './index.module.css';
import { Button, Input, Radio, Toast } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'
import { Vertify } from '@alex_xu/react-slider-vertify';
import { Navigate, useNavigate } from 'react-router-dom'
import UserModel from "../../models/User/UserModel";

let url = `https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png`;
function Login() {
    const { user, login } = UserModel();
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const show = () => {
        setVisible(true);
      };
    const handleVertify = (text:string)=> {
        Toast.show({
            content: text,
            afterClose: () => {},
        });
        setVisible(false);
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
                            >
                        </Radio>
                        <span className={styles.login_article}>
                            已阅读并同意《用户隐私协议》《隐私权政策》
                        </span>
                    </div>
                      
                    <Button className={styles.login_qrcode} onClick={show}>发送短信验证码</Button>
                    {
                        visible && 
                        <div className={styles.qrcode_vertify}>
                            <Vertify
                                width={250}
                                height={200}
                                visible={visible}
                                onSuccess={()=> {
                                    handleVertify('验证码发送成功')
                                    setTimeout(()=>{
                                        Toast.show({
                                            icon: 'loading',
                                            content: '模拟登陆中...',
                                        })
                                        navigate(-1);
                                        login();
                                    }, 3000)
                                }}
                                onFail={()=> { 
                                    handleVertify('校验失败')
                                }}
                                onRefresh={() => {}}
                            />
                        </div>
                    }
                </div>
           </div>
        </>
    )
}
export default Login;