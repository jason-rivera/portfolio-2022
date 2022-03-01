import styles from './HomePage.module.css';
import { Link } from "react-router-dom";


const HomePage = () => {
  return(
    <>
      <div className={styles.hello}>
        i am red
        <Link to="/about">About</Link>

      </div>
    </>
  )
}

export default HomePage;