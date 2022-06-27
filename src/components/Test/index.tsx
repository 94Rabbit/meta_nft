import React from "react";
import { Button, Toast } from 'antd-mobile'
import { testAPI } from '../../api/user';
import styles from './index.module.css';

const Test = ()=> {

    const test = async ()=> {
        const res = await testAPI();
        if(res.status === 200){
            Toast.show({
                content: res.data.data,
                afterClose: () => {
                    console.log('after')
                },
            })
        }
    }
    return (
        <>
            <div className={styles.btn_list}>
                <Button onClick={test} color="primary">后端testApi</Button>
            </div>
       
        </>
    );
}

export default Test;