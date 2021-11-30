import React from 'react';
import styles from './navBar.module.css'
import { Link } from 'react-router-dom';

const NavBar = ({isLogin, logIn, logOut, modalShow, toggle}) => {
  return(
    <div className={isLogin ? styles.container : styles.container_homepage}>
      <div className={isLogin ? styles.title : styles.title_homepage}>
        <span className={styles.logo}><i className="fab fa-xbox"></i></span>
        <span className={styles.text}>BOXCon</span>
      </div>
      <div className={styles.login}>
        {
          !isLogin
          ? <span className={styles.button} onClick={logIn}>로그인</span>
          : <>
              <span className={styles.store} onClick={modalShow}>스마트스토어 연동</span>
              <span className={styles.icon} onClick={logOut}><i className="fas fa-user"></i></span>
              <span className={styles.hamburger} onClick={toggle}><i className="fas fa-bars"></i></span>
            </>
        }
      </div>
    </div>
  )
}

export default NavBar;