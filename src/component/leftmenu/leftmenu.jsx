import React from 'react';
import styles from './leftmenu.module.css'

const Leftmenu = () => {
  return(
    <div className={styles.container}>
      <div className={styles.menu_home}>
        <span className={styles.icon}><i className="fas fa-home"></i></span>
        <span className={styles.text}>홈</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.icon}><i className="fas fa-boxes"></i></span>
        <span className={styles.text}>상품관리</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.icon}><i className="fas fa-pallet"></i></span>
        <span className={styles.text}>재고관리</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.icon}><i className="fas fa-cart-arrow-down"></i></span>
        <span className={styles.text}>주문관리</span>
      </div>
      <div className={styles.menu_setting}>
        <span className={styles.icon}><i className="fas fa-cogs"></i></span>
        <span className={styles.text}>설정</span>
      </div>
    </div>
  )
}

export default Leftmenu;