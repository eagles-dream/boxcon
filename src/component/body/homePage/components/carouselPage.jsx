import React from 'react';
import styles from './carouselPage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const CarouselPage = () => {
  return(
    <Carousel>
      <Carousel.Item interval={1000}>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero</p>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna</p>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselPage;