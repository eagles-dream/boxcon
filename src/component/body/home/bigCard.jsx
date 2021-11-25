import React from 'react';
import styles from './bigCard.module.css'

const BigCard = () => {
  return(
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.text}>
          <p className={styles.text_title}>입고현황</p>
          <p className={styles.text_date}>최근 1주일</p>
          <p className={styles.arrow}><i className="fas fa-chevron-down"></i></p>
        </span>
        <span className={styles.content}>입고 기록이 없습니다.</span>
      </div>
      <div className={styles.card}>
        <span className={styles.text}>
          <p className={styles.text_title}>출고현황</p>
          <p className={styles.text_date}>최근 1주일</p>
          <p className={styles.arrow}><i className="fas fa-chevron-down"></i></p>
        </span>
        <span className={styles.content}>출고 기록이 없습니다.</span>
      </div>
      <div className={styles.card}>
        <span className={styles.text}>
          <p className={styles.text_title}>재고 부족 상품</p>
        </span>
        <span className={styles.content}>재고 기록이 없습니다.</span>
      </div>
      <div className={styles.card}>
        <span className={styles.text}>
          <p className={styles.text_title}>판매량 많은 상품</p>
        </span>
        <span className={styles.content}>판매 기록이 없습니다.</span>
      </div>
    </div>
  )
}

export default BigCard;