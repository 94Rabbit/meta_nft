import React from 'react';
import Banner from '../Banner';
import Tabs from '../Tabs';
import NftList from '../NftList';
import styles from './index.module.css';

function Home() {
    return (
        <>  
            <div className={styles.home}>
                <Banner />
                <Tabs />
                <NftList />
            </div>
        </>
    )
}
export default Home;