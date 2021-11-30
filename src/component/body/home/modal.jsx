import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import styles from './modal.module.css'

const Madal = ({show, modalClose}) => {
  return(
    <Modal className={styles.container} show={show} onHide={modalClose} backdrop="static" keyboard={false} centered>
        <Modal.Header className={styles.header} closeButton>
          <Modal.Title>네이버 스마트스토어 API 연동</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>
          준비중입니다
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button className={styles.button} variant="secondary" onClick={modalClose}>
            다음에 하기
          </Button>
          <Button className={styles.button} variant="primary">연동하기</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Madal;