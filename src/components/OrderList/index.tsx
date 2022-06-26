import React from "react";
import { Tabs, Empty } from 'antd-mobile';
import styles from './index.module.css';
function OrderList () {
    return(
        <div className={styles.order_page}>
               <Tabs>
                    <Tabs.Tab title='全部' key='fruits'>
                        <div className={styles.order_content}>
                            <Empty description='暂无数据' />
                        </div>
                    </Tabs.Tab>
                    <Tabs.Tab title='已付款' key='vegetables'>
                        <div className={styles.order_content}>
                            <Empty description='暂无数据' />
                        </div>
                    </Tabs.Tab>
                    <Tabs.Tab title='未付款' key='animals'>
                        <div className={styles.order_content}>
                            <Empty description='暂无数据' />
                        </div>
                    </Tabs.Tab>
                </Tabs> 
        </div>)
     
}
export default OrderList