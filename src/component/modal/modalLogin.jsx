import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import styles from './modalLogin.module.css'

const ModalLogin = ({showLogin, modalLoginClose, logIn, googleLogIn}) => {
  return(
    <Modal className={styles.container} show={showLogin} onHide={modalLoginClose} keyboard={false} centered>
      <Modal.Header className={styles.header}>
        <Modal.Title className={styles.title}>만나서 반가워요</Modal.Title>
        <Modal.Title className={styles.text}>서비스 이용을 위해 로그인이 필요합니다.</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div className={styles.sns_container}>
          <div className={styles.sns}>SNS 로그인</div>
          <div className={styles.brand}>
            <span className={styles.naver}>네이버</span>
            <span className={styles.kakao}>카카오</span>
            <span className={styles.google} onClick={googleLogIn}>구글</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Button className={styles.button1} onClick={modalLoginClose}>
          취소하기
        </Button>
        <Button className={styles.button2} onClick={logIn}>로그인</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalLogin;