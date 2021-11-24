import './app.module.css';
import '@fortawesome/fontawesome-free/js/all.js'
import styles from './app.module.css'
import Navbar from './component/navbar/navbar';
import Leftmenu from './component/leftmenu/leftmenu';
import Home from './component/body/home/home';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Leftmenu />
        <Home />
      </div>
    </div>
  );
}

export default App;
