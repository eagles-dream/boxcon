import React, { useEffect, useRef } from 'react'
import styles from './naver.module.css';

function Naver({logIn}) {
  const naverRef = useRef();
  useEffect(() => {
    const naverScript = document.createElement("script");
    naverScript.src = "https://static.nid.Naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    naverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "Wh2bPnDWcyIjCI15npLG",
        callbackUrl: "http://localhost:3000/boxcom",
        callbackHandle: true,
        isPopup: false,
        loginButton: {
            color: "green",
            type: 3,
            height: 55,
        }
      });
      naverLogin.init();
      naverLogin.logout(); //네이버 로그인이 계속 유지되는 경우가 있음, 초기화시 로그아웃
    };
  }, [])

  const handleClick = () => {
      naverRef.current.children[0].click();
      logIn();
  }

  return (
    <>
    <div ref={naverRef} id="naverIdLogin" className={styles.button}></div>
    <span onClick={handleClick} className={styles.naver}>네이버 로그인</span>
    </>
  )
}

export default Naver;