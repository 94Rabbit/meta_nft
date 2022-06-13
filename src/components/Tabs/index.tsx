import React from 'react';
import { Space } from 'antd-mobile'
import styles from './index.module.css';
const tabList = [
    {
        id: 1,
        label: '数字藏品',
    },
    {
        id: 2,
        label: '发售日历',
    },
    {
        id: 3,
        label: '精选内容',
    }
]

function Tabs() {
    return (
        <>
            <Space>
                {
                    tabList.map((item)=>{
                        return  <div className={styles.tabs}>{item.label}</div>
                    })
                }
            </Space>
        </>
    )
}
export default Tabs;