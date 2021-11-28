import React from 'react';
import styles from './homePage.module.css'
import Introduction1 from './components/introduction1'
import Introduction2 from './components/introduction2'
import ProductPage from './components/productPage';
import StockPage from './components/stockPage';
import OrderPage from './components/orderPage';
import Footer from './components/footer';

const HomePage = ({logIn}) => {
  return(
    <div className={styles.container}>
      <Introduction1 logIn={logIn} />
      <Introduction2 />
      <ProductPage />
      <StockPage />
      <OrderPage />
      <Footer />
    </div>
  )
}

export default HomePage;