import styles from './Home.module.css';
import Persons from './Pesons/Persons';
function Home() {
  return (
    <div className={styles.home}>
      <h1>You can get our cards here: </h1>
      <Persons/>
    </div>
  );
}

export default Home;
