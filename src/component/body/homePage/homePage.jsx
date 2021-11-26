import React from 'react';
import styles from './homePage.module.css'

const HomePage = () => {
  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.text2}>판매자의</span>
        <span className={styles.text1}>일상을 바꾸다. 박스콘</span>
      </div>
      <div className={styles.right}>
        <span className={styles.img}><i className="fas fa-people-carry"></i></span>
      </div>
    </div>
  )
}

export default HomePage;