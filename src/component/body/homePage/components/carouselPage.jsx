import React from 'react';
import styles from './carouselPage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const CarouselPage = () => {
  return(
    <Carousel className={styles.container} indicators={false} controls={false}>
      <Carousel.Item interval={3000} className={styles.box_main1}>
        <h3 className={styles.box_main_title1}>상품관리</h3>
        <span className={styles.box_main_icon1}><i className="fas fa-boxes"></i></span>
      </Carousel.Item>
      <Carousel.Item interval={3000} className={styles.box_main2}>
        <h3 className={styles.box_main_title2}>재고관리</h3>
        <span className={styles.box_main_icon2}><i className="fas fa-pallet"></i></span>
      </Carousel.Item>
      <Carousel.Item interval={3000} className={styles.box_main3}>
        <h3 className={styles.box_main_title3}>주문관리</h3>
        <span className={styles.box_main_icon3}><i className="fas fa-cart-arrow-down"></i></span>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselPage;