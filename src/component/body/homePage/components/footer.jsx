import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return(
    <div className={styles.container}>
      <span className={styles.copyright}>© Copyright BOXcon</span>
    </div>
  )
}

export default Footer;