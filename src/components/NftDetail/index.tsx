import React from 'react';
import { NavBar, Space, Toast, Image } from 'antd-mobile'
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom'
import wutai from '../../assets/wutai.png';

const url = `https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png`;
function NftDetail() {
    const navigate = useNavigate();
    const back = () => navigate(-1);
    return (
        <>
            <div className={styles.nft_detail}>
                <NavBar onBack={back}></NavBar>
                <Image src={url} className={styles.nft_pic}/>
                {/* <div className={styles.nft_wutai}></div> */}
                <div className={styles.nft_wutai}>
                    <Image src={wutai} />
                </div>
                <p className={styles.nft_name}>隔壁二愣子楼下挖的盆子</p>
                {/* <div className={styles}>
                    重磅
                </div>
                <div className={styles}>

                </div> */}
                <div className={styles.nft_author}>
                    <Image src={url} className={styles.nft_avatar}/>
                    <div className={styles.nft_profile}>
                        <div className={styles.author_name}>楼下隔壁大哥</div>
                        <div className={styles.nft_creator}>创作者</div>
                    </div>
                </div>
                <div className={styles.nft_Issuer}>
                    <h1 className={styles.nft_title}>藏品介绍</h1>
                    <Image src={url} className={styles.nft_img}/>
                    <Image src={url} className={styles.nft_img}/>
                    <Image src={url} className={styles.nft_img}/>
                    <Image src={url} className={styles.nft_img}/>
                </div>
            </div>
        </>
    )
}
export default NftDetail;