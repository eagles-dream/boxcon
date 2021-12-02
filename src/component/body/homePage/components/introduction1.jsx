import React from 'react';
import styles from './introduction1.module.css'

const Introduction1 = ({modalLogin}) => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.text1}>판매자의</span>
        <span className={styles.text2}>일상을 바꾸다.</span>
        <span className={styles.text3}>박스콘</span>
        <span className={styles.button} onClick={modalLogin}>시작하기</span>
      </div>
      <div className={styles.image}>
        <span className={styles.icon}><i className="fas fa-people-carry"></i></span>
      </div>
    </div>
  )
}

export default Introduction1;