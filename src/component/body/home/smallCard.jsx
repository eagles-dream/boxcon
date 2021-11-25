import React from 'react';
import styles from './smallCard.module.css'

const SmallCard = () => {
  return(
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.icon1}><i className="fas fa-download"></i></span>
        <span className={styles.text}>
          <p className={styles.text_title}>입고</p>
          <p className={styles.count1}>0</p>
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.icon2}><i className="fas fa-upload"></i></span>
        <span className={styles.text}>
          <p className={styles.text_title}>출고</p>
          <p className={styles.count2}>0</p>
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.icon3}><i className="fas fa-cart-plus"></i></span>
        <span className={styles.text}>
          <p className={styles.text_title}>신규주문</p>
          <p className={styles.count3}>0</p>
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.icon4}><i className="fas fa-undo"></i></span>
        <span className={styles.text}>
          <p className={styles.text_title}>취소요청</p>
          <p className={styles.count4}>0</p>
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.icon5}><i className="fas fa-exchange-alt"></i></span>
        <span className={styles.text}>
          <p className={styles.text_title}>반품/교환</p>
          <p className={styles.count5}>0</p>
        </span>
      </div>
    </div>
  )
}

export default SmallCard;