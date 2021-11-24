import React from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.logo}><i className="fab fa-xbox"></i></span>
        <span className={styles.text}>BOXCon</span>
      </div>
      <div className={styles.login}>
        <span className={styles.store}>스마트스토어 연동</span>
        <span className={styles.icon}><i className="fas fa-user"></i></span>
      </div>
    </div>
  )
}

export default Navbar;