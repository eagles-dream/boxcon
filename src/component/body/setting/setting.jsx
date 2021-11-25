import React from 'react';
import styles from './setting.module.css'

const Setting = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>설정</div>
      <div className={styles.empty}>
        <span className={styles.text}>준비중 입니다.</span>
      </div>
    </div>
  )
}

export default Setting;