import React from 'react';
import { Space } from 'antd-mobile'
import styles from './index.module.css';
import { Card, Image, Avatar } from 'antd-mobile'
let url = `https://image.shutterstock.com/image-vector/actually-he-would-really-laugh-600w-2102441059.jpg`;
let avaUrl = `https://image.shutterstock.com/image-vector/actually-he-would-really-laugh-600w-2102441059.jpg`;
function Ntf() {
    return (
        <>
            <Card className={styles.nft_item}>
                <Image src={url} className={styles.nft_pic}/>
                <p className={styles.nft_name}>《啥都没有》</p>
                <div className={styles.nft_info}>
                    <i className={styles.nft_desc}>限量</i>
                    <em className={styles.nft_nums}>10000份</em>
                </div>
                <div className={styles.nft_author}>
                    <Avatar src={url} className={styles.nft_avatar}/>
                    <span className={styles.nft_authName}>大西瓜</span>
                    <strong className={styles.nft_price}>￥1888</strong>
                </div>
            </Card>
        </>
    )
}
export default Ntf;