import React from 'react';
import styles from './productPage.module.css'

const ProductPage = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.text1}>상품연결</span>
        <span className={styles.text23}>
          <span className={styles.text2}>클릭 한 번으로</span>
          <span className={styles.text3}>상품 연동완료</span>
        </span>
        <span className={styles.text4}>
          번거로운 상품 등록은 그만 스마트스토어에서 판매하는 상품정보를 그대로 불러오세요
        </span>
      </div>
      <div className={styles.image}>
        <span className={styles.icon}><i className="fas fa-boxes"></i></span>
      </div>
    </div>
  )
}

export default ProductPage;