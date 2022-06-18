import React from 'react';
import { Button, SearchBar, Space, Toast } from 'antd-mobile'
import styles from './index.module.css';
import NftList from '../NftList';
function BlindGift() {
    return (
        <>  
            <div className={styles.blind_gift}>
                <div className={styles.search}>
                    <SearchBar placeholder='搜索商品、专辑、盲盒' />
                </div>
                <div className={styles.blind_list}>
                    <NftList />
                </div>
            </div>
        </>
    )
}
export default BlindGift;