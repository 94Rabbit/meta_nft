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
    picUrl: `https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__340.jpg`
  },
  {
    id: 2,
    picUrl: `https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__480.png`
  },
  {
    id: 3,
    picUrl: `https://static.ibox.art/file/oss/test/image/nft-goods/39c1d687c0be43f68aa7134f7d04a07a.png?style=st6`
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
