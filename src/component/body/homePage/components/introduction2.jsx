import React from 'react';
import CarouselPage from './carouselPage';
import styles from './introduction2.module.css'

const Introduction2 = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.text1}>
          <i className="fab fa-xbox"></i>
          <h1>BOXCon</h1>
          <h1>"박스콘"은</h1>
        </span>
        <span className={styles.text2}>
          <p>네이버 스마트스토어</p>
          <p>주문데이터와 연동해서</p>
        </span>
        <span className={styles.text3}>
          <p>재고가 자동으로 관리되는</p>
          <p>무료 솔루션입니다</p>
        </span>
      </div>
      <div className={styles.box}>
        <CarouselPage />
        <div className={styles.box_main}>
          <span className={styles.box_main_title}>상품관리</span>
          <span className={styles.box_main_icon}><i className="fas fa-boxes"></i></span>
        </div>
        <div className={styles.box_sub}>
          <span className={styles.sub1}>
            <span className={styles.sub1_text}>
              네이버 스마트스토어 판매자 설문을 통해 꼭 필요한 기능만!
            </span>
            <span className={styles.sub1_icon}>
              <i className="fab fa-xbox"></i>
            </span>
          </span>
          <span className={styles.sub2}>
            <span className={styles.sub2_text}>
              주문, 재고 데이터를 <font color='lightgreen'>한번에 연동</font>하고 부담없이 <font color='lightgreen'>무료</font>로 이용하세요
            </span>
            <span className={styles.sub2_icon}>
              <i className="fab fa-xbox"></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Introduction2;