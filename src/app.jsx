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
import Modal from './component/body/home/modal';
import LeftMenuPc from './component/leftMenu/leftMenuPc';
import ModalLogin from './component/body/homePage/components/modalLogin';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const logIn = () => {
    setIsLogin(!isLogin)
    modalLoginClose()
  }
  
  const logOut = () => {
    setIsLogin(!isLogin)
    navigate('/')
  }
  
  const [show, setShow] = useState(false);
  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen((open)=>{return !open})
  }

  const [showLogin, setShowLogin] = useState(false)
  const modalLogin = () => {setShowLogin(true)}
  const modalLoginClose = () => {setShowLogin(false)}

  return (
    <div className={styles.container}>
      <NavBar isLogin={isLogin} modalLogin={modalLogin} logOut={logOut} modalShow={modalShow} toggle={toggle} />
      {
        !isLogin 
        ? <Routes><Route path="/" element={<HomePage logIn={logIn} />} /></Routes>
        : <div className={styles.body}>
            <LeftMenuPc />
            <LeftMenu open={open} toggle={toggle} />
            <Routes>
              <Route path="/" element={<Home show={show} modalClose={modalClose} modalShow={modalShow} />} />
              <Route path="home" element={<Home show={show} modalClose={modalClose} modalShow={modalShow} />} />
              <Route path="product" element={<Product show={show} modalClose={modalClose} modalShow={modalShow} />} />
              <Route path="stock" element={<Stock show={show} modalClose={modalClose} modalShow={modalShow} />} />
              <Route path="order" element={<Order show={show} modalClose={modalClose} modalShow={modalShow} />} />
              <Route path="setting" element={<Setting />} />
            </Routes>
          </div>
      }
      <Modal show={show} modalClose={modalClose} />
      <ModalLogin showLogin={showLogin} modalLoginClose={modalLoginClose} logIn={logIn} />
    </div>
  );
}

export default App;
