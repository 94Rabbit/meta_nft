import React from 'react';
import { Route, Routes } from 'react-router-dom'
import TabBars from './components/TabBars';
import styles from './index.module.css';
import Home from './components/Home';
import PersonalCenter from './components/PersonalCenter';
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
        </Routes>
      </div>
      <div className={styles.footer}>
          <TabBars />
          <div style={{ background: '#ffcfac' }}>
            <SafeArea position='bottom' />
          </div>
      </div>
    </div>
  );
}

export default App;
