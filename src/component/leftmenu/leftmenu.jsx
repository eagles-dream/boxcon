import React from 'react';
import styles from './leftMenu.module.css'
import { Link } from 'react-router-dom';

const LeftMenu = ({open, toggle, modalShow}) => {
  return(
    <div className={!open ? styles.container_close : styles.container}>
      <Link to='home' className={styles.menu} onClick={toggle}>
        <span className={styles.text}>홈</span>
      </Link>
      <Link to='product' className={styles.menu} onClick={toggle}>
        <span className={styles.text}>상품관리</span>
      </Link>
      <Link to='stock' className={styles.menu} onClick={toggle}>
        <span className={styles.text}>재고관리</span>
      </Link>
      <Link to='order' className={styles.menu} onClick={toggle}>
        <span className={styles.text}>주문관리</span>
      </Link>
      <Link to='setting' className={styles.menu} onClick={toggle}>
        <span className={styles.text}>설정</span>
      </Link>
      <span className={styles.store} onClick={modalShow}>
        <span className={styles.store_text}>스마트스토어 연동</span>
      </span>
    </div>
  )
}

export default LeftMenu;