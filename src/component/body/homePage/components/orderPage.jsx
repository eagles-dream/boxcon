import React from 'react';
import styles from './orderPage.module.css'

const OrderPage = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.text1}>주문관리</span>
        <span className={styles.text23}>
          <span className={styles.text2}>판매따로, 재고따로?</span>
          <span className={styles.text3}>박스콘에선 동시에</span>
        </span>
      </div>
      <div className={styles.card_container}>
        <span className={styles.card}>
          <span className={styles.image}></span>
          <span className={styles.text}>
            01. 주문 상태별로 재고 수량과 위치를 정해 출고할 수 있어요.
          </span>
        </span>
        <span className={styles.card}>
          <span className={styles.image}></span>
          <span className={styles.text}>
            02. 먼저 출고된 상품은 비활성화되어 부분 출고 관리가 쉬어요.
          </span>
        </span>
        <span className={styles.card}>
          <span className={styles.image}></span>
          <span className={styles.text}>
            03. 박스콘에 송장번호를 입력하면 스마트스토어에도 입력되요.
          </span>
        </span>
      </div>
    </div>
  )
}

export default OrderPage;