import React from 'react';
import { Badge, TabBar } from 'antd-mobile'
import {
    AppOutline,
    UserOutline,
} from 'antd-mobile-icons'
import styles from './index.module.css';
import { Image, Swiper, Toast } from 'antd-mobile'
const bannerList = [
  {
    id: 1,
    picUrl: `https://image.shutterstock.com/image-vector/nft-token-crypto-artwork-banner-600w-2087482288.jpg`
  },
  {
    id: 2,
    picUrl: `https://image.shutterstock.com/image-vector/nft-theme-design-cryptographic-art-600w-2108203079.jpg`
  }
]

const items = bannerList.map((item, index) => (
  <Swiper.Item key={item?.id}>
    <div
      className={styles.banner_box}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      <Image src={item?.picUrl} width={`100%`} height={`auto`} fit='fill' />
    </div>
  </Swiper.Item>
))
function Banner() {
  return (
    <>
       <Swiper autoplay>{items}</Swiper>
    </>
  );
}

export default Banner;
