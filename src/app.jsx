import './app.module.css';
import '@fortawesome/fontawesome-free/js/all.js'
import styles from './app.module.css'
import NavBar from './component/navBar/navBar';
import LeftMenu from './component/leftMenu/leftMenu';
import Home from './component/body/home/home';
import Product from './component/body/product/product';
import { Routes, Route } from "react-router-dom";
import Stock from './component/body/stock/stock';
import Order from './component/body/order/order';
import Setting from './component/body/setting/setting';

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.body}>
        <LeftMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/order" element={<Order />} />
          <Route path="/setting" element={<Setting />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
