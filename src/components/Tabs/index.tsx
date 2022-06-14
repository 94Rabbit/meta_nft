import React, {useState} from 'react';
import { Space, Toast } from 'antd-mobile'
import styles from './index.module.css';
interface ITab {
    id: number
    label: string
}
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
    const [currentTab, setCurrentTab] = useState(1);

    function clickHandler(item:ITab) {
        Toast.show({
            icon: 'loading',
            content: '加载中…',
        })
        setCurrentTab(item.id);
    }
    return (
        <>
            <Space>
                {
                    tabList.map((item)=>{
                        return  <div 
                                    key={item.id}
                                    className={(item.id === currentTab) ? styles.avtiveTab : styles.tabs } 
                                    onClick={()=>{clickHandler(item)}}>{item.label}
                                </div>
                    })
                }
            </Space>
        </>
    )
}
export default Tabs;