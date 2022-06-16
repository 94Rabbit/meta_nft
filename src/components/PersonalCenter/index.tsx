import React, { useState } from 'react';
import { Empty, Image, Button } from 'antd-mobile'
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom'
import {
    RightOutline,
    // EditSOutline,
    CloseOutline
  } from 'antd-mobile-icons'
import message from '../../assets/message.png';
import order from '../../assets/order.png';
import record from '../../assets/record.png';
import search from '../../assets/search.png';
import contact from '../../assets/contact.png';
import about from '../../assets/about.png';
import share from '../../assets/share.png';
import setting from '../../assets/setting.png';
import collect from '../../assets/collect.png';
import UserModel from "../../models/User/UserModel";

let url = `https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png`;
function PersonalCenter() {
    const { user, login} = UserModel();
    const [ show, setShow ] = useState(true);
    const navigate = useNavigate();
    const goLoginForm = ()=> {
        navigate('/login');
    }
    const handleLogin = ()=> {
        login();
    }
    return (
        <>
            <div className={styles.personal}>
                <div className={styles.personal_header}>
                    <Image src={url} className={styles.personal_avatar}/>
                    <div className={styles.personal_info}>
                        <p className={styles.personal_name}> {user ? '西瓜不是瓜' : '未登录'} </p>
                        <p className={styles.personal_phone}>{user ? '130****4987' : '登录后可以查看你的数字藏品'}</p>
                    </div>
                    {
                        user && <Button className={styles.personal_profile}>个人主页</Button>
                    }
                </div>
                <div className={styles.personal_main}>
                    <ul className={styles.personal_box}>
                        <li className={styles.personal_item}>
                            <Image className={styles.main_img} src={collect} />
                            <span className={styles.main_label}>我的收藏</span>
                        </li>
                        <li  className={styles.personal_item}>
                            <Image className={styles.main_img} src={order} />
                            <span className={styles.main_label}>我的订单</span>
                        </li>
                        <li  className={styles.personal_item}>
                            <Image className={styles.main_img} src={record} />
                            <span className={styles.main_label}>藏品记录</span>
                        </li>
                        <li  className={styles.personal_item}>
                            <Image className={styles.main_img} src={message} />
                            <span className={styles.main_label}>消息</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.setting_area}>
                    <div className={styles.setting_item}>
                        <Image src={search} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>区块链信息查询</p>
                        <RightOutline color='#fff' className={styles.right_arrow}/>
                    </div>
                    <div className={styles.setting_item}>
                        <Image src={contact} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>联系我们</p>
                        <RightOutline color='#fff' className={styles.right_arrow}/>
                    </div>
                    <div className={styles.setting_item}>
                        <Image src={about} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>关于我们</p>
                        <RightOutline color='#fff' className={styles.right_arrow}/>
                    </div>
                    <div className={styles.setting_item}>
                        <Image src={share} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>分享APP</p>
                        <RightOutline color='#fff' className={styles.right_arrow}/>
                    </div>
                </div>
                <div className={styles.setting_single}>
                    <Image src={setting} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>设置</p>
                    <RightOutline color='#fff' className={styles.right_arrow}/>
                </div>
                {
                    !user && show && 
                    <div className={styles.login_status}>
                        <span className={styles.login_note}>
                            点击登录，开启你的数字藏品之旅
                        </span>
                        <Button className={styles.login_btn} onClick={goLoginForm}>登录</Button>
                        <CloseOutline color={'#fff'} className={styles.login_close} fontWeight={400} onClick={()=>{setShow(false)}}/>
                    </div>
                }
            </div>
        </>
    )
}
export default PersonalCenter;