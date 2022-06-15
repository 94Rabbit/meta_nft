import React from 'react';
import { Empty, Image, Button } from 'antd-mobile'
import styles from './index.module.css';
import {
    RightOutline,
    // EditSOutline
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

let url = `https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png`;
function PersonalCenter() {
    return (
        <>
            <div className={styles.personal}>
                <div className={styles.personal_header}>
                    <Image src={url} className={styles.personal_avatar}/>
                    <div className={styles.personal_info}>
                        <p className={styles.personal_name}>西瓜不是瓜</p>
                        <p className={styles.personal_phone}>130****4987</p>
                    </div>
                    <Button className={styles.personal_profile}>个人主页</Button>
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
            </div>
        </>
    )
}
export default PersonalCenter;