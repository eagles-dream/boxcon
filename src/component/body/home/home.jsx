import React from 'react';
import styles from './home.module.css'
import BigCard from './bigCard';
import SmallCard from './smallCard';

const Home = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>오늘의 물류현황</div>
      <SmallCard />
      <BigCard />
    </div>
  )
}

export default Home;