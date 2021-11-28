import React from 'react';
import styles from './stockPage.module.css'

const StockPage = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.text1}>재고관리</span>
        <span className={styles.text23}>
          <span className={styles.text2}>알아서 관리되니까</span>
          <span className={styles.text3}>귀차니즘 해결</span>
        </span>
      </div>
      <div className={styles.card_container}>
        <span className={styles.card}>
          <span className={styles.image}></span>
          <span className={styles.text}>
            01. 안전 재고를 설정하면 재고부족 상품을 실시간으로 확인할 수 있어요.
          </span>
        </span>
        <span className={styles.card}>
          <span className={styles.image}></span>
          <span className={styles.text}>
            02. 집 안 어디에 보관해도 정확하게 수량을 파악할 수 있어요.
          </span>
        </span>
        <span className={styles.card}>
          <span className={styles.image}></span>
          <span className={styles.text}>
            03. 세트 상품이 판매되면 단품 재고가 각각 차감돼요.
          </span>
        </span>
      </div>
    </div>
  )
}

export default StockPage;