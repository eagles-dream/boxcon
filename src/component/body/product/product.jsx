import React from 'react';
import styles from './product.module.css'

const Product = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>상품관리</div>
      <div className={styles.empty}>
        <span className={styles.icon}><i className="fas fa-people-carry"></i></span>
        <span className={styles.text}>상품을 등록해 주세요</span>
        <span className={styles.button}>
          <button className={styles.left}>직접 등록하기</button>
          <button className={styles.right}>상품 불러오기</button>
        </span>
      </div>
    </div>
  )
}

export default Product;