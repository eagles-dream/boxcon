import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import styles from './modalLogOut.module.css'

const MadalLogOut = ({showLogOut, modalLogOutClose, googleLogOut}) => {
  const logOut = () => {
    googleLogOut();
    modalLogOutClose();
  }
  return(
    <Modal className={styles.container} show={showLogOut} onHide={modalLogOutClose} backdrop="static" keyboard={false} centered>
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title>로그아웃</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        로그아웃 하시겠습니까?
      </Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Button className={styles.button} variant="secondary" onClick={modalLogOutClose}>
          취소하기
        </Button>
        <Button className={styles.button} variant="primary" onClick={logOut}>로그아웃</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MadalLogOut;