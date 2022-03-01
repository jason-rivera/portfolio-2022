import styles from './AboutPage.module.css';
import { Link } from "react-router-dom";

const AboutPage = () => {
  return(
    <>
      <div className={styles.hello}>
        i am green
        <Link to="/">Home</Link>
      </div>
    </>
  )
}

export default AboutPage;