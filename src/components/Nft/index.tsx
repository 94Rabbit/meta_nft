import React from 'react';
import { Space } from 'antd-mobile'
import styles from './index.module.css';
import { Card, Image, Avatar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import clock from '../../assets/clock.png';

let url = `https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png`;
function Ntf() {
    const navigate = useNavigate();
    const goNftDetail = ()=> {
        navigate('/detail');
    }
    return (
        <>
            <Card className={styles.nft_item} onClick={goNftDetail}>
                <div className={styles.nft_pic}>
                    <Image src={url} className={styles.hot_img}/>
                    <div className={styles.hot_block}>
                        <Image src={clock} />
                        <span className={styles.hot_label}>
                            抢购结束
                        </span>
                        <span className={styles.hot_time}>
                            08:48:48
                        </span>
                    </div>
                </div>
              
                <p className={styles.nft_name}>《啥都没有》</p>
                <p className={styles.nft_price}>￥1888.00</p>
                <div className={styles.nft_author}>
                    <Avatar src={url} className={styles.nft_avatar}/>
                    <span className={styles.nft_authName}>大西瓜</span>
                    <div className={styles.nft_info}>
                        <i className={styles.nft_desc}>限量</i>
                        <em className={styles.nft_nums}>1份</em>
                    </div>
                </div>
            </Card>
        </>
    )
}
export default Ntf;