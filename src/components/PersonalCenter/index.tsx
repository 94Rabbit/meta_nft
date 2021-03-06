import React, { useState } from 'react';
import { Image, Button, ImageViewer } from 'antd-mobile'
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom'
import {
    RightOutline,
    CloseOutline,
    UserOutline
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


let url = `https://static.ibox.art/file/oss/test/image/nft-goods/60811c1fdcbd46818c71f11bbe9ccbcd.png`;
function PersonalCenter() {
    const { user } = UserModel();
    const [ show, setShow ] = useState(true);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)
    const goLoginForm = ()=> {
        navigate('/login');
    }
    return (
        <>
            <div className={styles.personal}>
                <div className={styles.personal_header}>
                    <div className={styles.personal_avatar}>
                        {
                            user  
                                ? <Image src={user.avatar} className={styles.personal_pic} onClick={() => {
                                    setVisible(true)
                                  }}/>
                                : <UserOutline color={`#4C3929`} fontSize={24}/>
                        }
                        {
                           user && <ImageViewer
                                image={user.avatar}
                                visible={visible}
                                onClose={() => {
                                setVisible(false)
                                }}
                            />
                        }
                    </div>
                    <div className={styles.personal_info}>
                        <p className={styles.personal_name} onClick={()=> { if(!user){goLoginForm()}}}> { user ? user.name : '?????????' } </p>
                        <p className={styles.personal_phone}>{user ? user.wallet : '???????????????????????????????????????'}</p>
                    </div>
                    {
                        user && <Button className={styles.personal_profile}>????????????</Button>
                    }
                </div>
                <div className={styles.personal_main}>
                    <ul className={styles.personal_box}>
                        <li className={styles.personal_item}>
                            <Image className={styles.main_img} src={collect} />
                            <span className={styles.main_label}>????????????</span>
                        </li>
                        <li  className={styles.personal_item} onClick={()=>{navigate('/order')}}>
                            <Image className={styles.main_img} src={order} />
                            <span className={styles.main_label}>????????????</span>
                        </li>
                        <li  className={styles.personal_item}>
                            <Image className={styles.main_img} src={record} />
                            <span className={styles.main_label}>????????????</span>
                        </li>
                        <li  className={styles.personal_item}>
                            <Image className={styles.main_img} src={message} />
                            <span className={styles.main_label}>??????</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.setting_area}>
                    <div className={styles.setting_item}>
                        <Image src={search} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>?????????????????????</p>
                        <RightOutline color='#fff' className={styles.right_arrow}/>
                    </div>
                    <div className={styles.setting_item}>
                        <Image src={contact} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>????????????</p>
                        <RightOutline color='#fff' className={styles.right_arrow}/>
                    </div>
                    <div className={styles.setting_item}>
                        <Image src={about} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>????????????</p>
                        <RightOutline color='#fff' className={styles.right_arrow}/>
                    </div>
                    <div className={styles.setting_item}>
                        <Image src={share} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>??????APP</p>
                        <RightOutline color='#fff' className={styles.right_arrow}/>
                    </div>
                </div>
                <div className={styles.setting_single}>
                    <Image src={setting} className={styles.setting_icon}/>
                        <p className={styles.setting_text}>??????</p>
                    <RightOutline color='#fff' className={styles.right_arrow}/>
                </div>
                {
                    !user && show && 
                    <div className={styles.login_status}>
                        <span className={styles.login_note}>
                            ?????????????????????????????????????????????
                        </span>
                        <Button className={styles.login_btn} onClick={goLoginForm}>??????</Button>
                        <CloseOutline color={'#fff'} className={styles.login_close} fontWeight={400} onClick={()=>{setShow(false)}}/>
                    </div>
                }
            </div>
        </>
    )
}
export default PersonalCenter;