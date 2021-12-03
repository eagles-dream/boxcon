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

  const [kakaoUser, setKakaoUser] = useState();
  const kakaoLogIn = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, account_email',
      success: (data) => {
        //console.log(data)
        console.log(data.access_token)
        console.log(data.refresh_token)
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            const account = res.kakao_account;
            setKakaoUser(account.email)
            console.log(account.email)
            console.log(account.profile.nickname)
          }
        })
        .then(logIn)
      }
    })
  }
  const kakaoLogOut = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log('Not logged in.');
      return;
    };
    window.Kakao.Auth.logout(function() {
      console.log(window.Kakao.Auth.getAccessToken());
    });
    logOut();
    setKakaoUser(null);
  }
  
  const [googleUser, setGoogleUser] = useState();
  const googleLogIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setGoogleUser(user.email)
      console.log(user.email)
      console.log(user.displayName)
      // ...
    })
    .then(logIn)
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
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
    setGoogleUser(null);
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
      <NavBar 
        isLogin={isLogin}
        toggle={toggle}
        modalShow={modalShow}
        modalLogin={modalLogin}
        modalLogOut={modalLogOut}
        kakaoUser={kakaoUser}
        googleUser={googleUser} />
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
      <ModalLogin 
        showLogin={showLogin}
        modalLoginClose={modalLoginClose}
        kakaoLogIn={kakaoLogIn}
        googleLogIn={googleLogIn}
        logIn={logIn} />
      <ModalLogOut 
        showLogOut={showLogOut} 
        modalLogOutClose={modalLogOutClose} 
        kakaoLogOut={kakaoLogOut}
        googleLogOut={googleLogOut} />
    </div>
  );
}

export default App;
