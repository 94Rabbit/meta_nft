import React from 'react';
import { Space } from 'antd-mobile'
import styles from './index.module.css';
import Ntf from '../Nft';

function NftList() {
    return (
        <>
            <div className={styles.list}>
                <Ntf/>
                <Ntf/>
                <Ntf/>
                <Ntf/>
                <Ntf/>
            </div>
        </>
    )
}
export default NftList;