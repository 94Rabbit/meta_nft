import React, { useEffect, useState } from 'react';
import { NavBar, Space, Toast, Image } from 'antd-mobile'
import styles from './index.module.css';
import { useNavigate, useLocation, useSearchParams, useParams } from 'react-router-dom'
import wutai from '../../assets/wutai.png';
import desc from '../../assets/desc.png';

import { NFTLIST } from '../../mock';
interface INft{
    id: number
    picUrl: string
    name: string
    price: number
}
const url = `https://static.ibox.art/file/oss/test/image/nft-goods/60811c1fdcbd46818c71f11bbe9ccbcd.png`;
function NftDetail() {
    const [search, setSearch] = useSearchParams();
    const id = search.get("id");
    const [currentItem, setCurrentItem] = useState<INft | undefined>(undefined);
    const navigate = useNavigate();
    useEffect(()=>{
        getCurrentItem(search.get("id"));
    }, [id])
    const back = () => navigate(-1);
    const getCurrentItem = (id:any)=> {
        const _item = NFTLIST.find(item =>item?.id == Number(id))
        console.log(_item);
        setCurrentItem(_item);
    }
    return (
        <>
            <div className={styles.nft_detail}>
                <NavBar onBack={back}></NavBar>
                <Image src={currentItem?.picUrl} className={styles.nft_pic}/>
                <div className={styles.nft_wutai}></div>
                <div className={styles.nft_wutai}>
                    <Image src={wutai} />
                </div>
                <p className={styles.nft_name}>{ currentItem?.name }</p>
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
                    <Image src={desc} className={styles.nft_img}/>
                    <Image src={desc} className={styles.nft_img}/>
                    <Image src={desc} className={styles.nft_img}/>
                </div>
            </div>
        </>
    )
}
export default NftDetail;