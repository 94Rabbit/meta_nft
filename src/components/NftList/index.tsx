import React from 'react';
import { Space } from 'antd-mobile'
import styles from './index.module.css';
import Ntf from '../Nft';
import { NFTLIST } from '../../mock';

function NftList() {
    return (
        <>
            <div className={styles.list}>
                {
                    NFTLIST.map((item)=>{
                        return  <Ntf item={item} key={item.id}/>
                    })
                }
            </div>
        </>
    )
}
export default NftList;