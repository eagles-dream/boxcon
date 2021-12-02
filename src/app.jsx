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
import Modal from './component/modal/modal';
import LeftMenuPc from './component/leftMenu/leftMenuPc';
import ModalLogin from './component/modal/modalLogin';
import ModalLogOut from './component/modal/modalLogOut';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from './service/firebase'

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

  
  const [user, setUser] = useState(null);

  const googleLogIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(user.email)
      // ...
    })
    .then(logIn)
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const googleLogOut = () => {
    const auth = getAuth();
    
    signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .then(logOut)
    .catch((error) => {
      // An error happened.
    });
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

  const [showLogOut, setShowLogOut] = useState(false)
  const modalLogOut = () => {setShowLogOut(true)}
  const modalLogOutClose = () => {setShowLogOut(false)}

  return (
    <div className={styles.container}>
      <NavBar isLogin={isLogin} modalShow={modalShow} modalLogin={modalLogin} user={user} modalLogOut={modalLogOut} googleLogIn={googleLogIn} toggle={toggle} />
      {
        !isLogin 
        ? <Routes><Route path="/" element={<HomePage modalLogin={modalLogin} />} /></Routes>
        : <div className={styles.body}>
            <LeftMenuPc />
            <LeftMenu open={open} toggle={toggle} modalShow={modalShow} />
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
      <ModalLogin showLogin={showLogin} modalLoginClose={modalLoginClose} logIn={logIn} googleLogIn={googleLogIn} />
      <ModalLogOut showLogOut={showLogOut} modalLogOutClose={modalLogOutClose} googleLogOut={googleLogOut} />
    </div>
  );
}

export default App;
