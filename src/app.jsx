import './app.module.css';
import '@fortawesome/fontawesome-free/js/all.js'
import styles from './app.module.css'
import NavBar from './component/navBar/navBar';
import LeftMenu from './component/leftMenu/leftMenu';
import Home from './component/body/home/home';
import Product from './component/body/product/product';
import { Routes, Route, useNavigate } from "react-router-dom";
import Stock from './component/body/stock/stock';
import Order from './component/body/order/order';
import HomePage from './component/body/homePage/homePage';
import Setting from './component/body/setting/setting';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const logIn = () => setIsLogin(!isLogin)
  const logOut = () => {
    setIsLogin(!isLogin)
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <NavBar isLogin={isLogin} logIn={logIn} logOut={logOut} />
      {
        !isLogin 
        ? <Routes><Route path="/" element={<HomePage logIn={logIn} />} /></Routes>
        : <div className={styles.body}>
            <LeftMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="stock" element={<Stock />} />
              <Route path="order" element={<Order />} />
              <Route path="setting" element={<Setting />} />
            </Routes>
          </div>
      }
    </div>
  );
}

export default App;
