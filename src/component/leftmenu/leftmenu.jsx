import React from 'react';
import styles from './leftMenu.module.css'
import { Link } from 'react-router-dom';

const LeftMenu = ({open, toggle}) => {
  return(
    <div className={!open ? styles.container_close : styles.container}>
      <Link to='home' className={styles.menu_home} onClick={toggle}>
        <span className={styles.icon}><i className="fas fa-home"></i></span>
        <span className={styles.text}>홈</span>
      </Link>
      <Link to='product' className={styles.menu} onClick={toggle}>
        <span className={styles.icon}><i className="fas fa-boxes"></i></span>
        <span className={styles.text}>상품관리</span>
      </Link>
      <Link to='stock' className={styles.menu} onClick={toggle}>
        <span className={styles.icon}><i className="fas fa-pallet"></i></span>
        <span className={styles.text}>재고관리</span>
      </Link>
      <Link to='order' className={styles.menu} onClick={toggle}>
        <span className={styles.icon}><i className="fas fa-cart-arrow-down"></i></span>
        <span className={styles.text}>주문관리</span>
      </Link>
      <Link to='setting' className={styles.menu_setting} onClick={toggle}>
        <span className={styles.icon}><i className="fas fa-cogs"></i></span>
        <span className={styles.text}>설정</span>
      </Link>
    </div>
  )
}

export default LeftMenu;