import React from 'react';
import { Route, Routes } from 'react-router-dom'
import TabBars from './components/TabBars';
import styles from './index.module.css';
import Home from './components/Home';
import PersonalCenter from './components/PersonalCenter';
import NftDetail from './components/NftDetail';
import Login from './components/Login';
import OrderList from './components/OrderList';
import Test from './components/Test';
import BlindGift from './components/BlindGift';
import { SafeArea } from 'antd-mobile'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personalcenter" element={<PersonalCenter />} />
          <Route path="/detail" element={<NftDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path='/blindgift' element={<BlindGift />}></Route>
          <Route path='/order' element={<OrderList />}></Route>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
      </div>
      <div className={styles.footer}>
          <TabBars />
          <div style={{ background: '#272727' }}>
            <SafeArea position='bottom' />
          </div>
      </div>
    </div>
  );
}

export default App;
