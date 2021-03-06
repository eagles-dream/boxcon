import React from 'react';
import styles from './order.module.css'

const Order = ({modalShow}) => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>주문관리</div>
      <div className={styles.empty}>
        <span className={styles.icon}><i className="fas fa-cart-arrow-down"></i></span>
        <span className={styles.text}>주문을 수집해 주세요</span>
        <span className={styles.button}>
          <button className={styles.left} onClick={modalShow}>쇼핑몰 주문 연동하기</button>
        </span>
      </div>
    </div>
  )
}

export default Order;