import React from "react";
import styles from './Home.module.css';

import Welcome from "../Welcome/Welcome";
import News from "../News/News";
import Features from "../Features/Features";

const Home: React.FC = () => {
  return (
    <div className={styles['home-container']}>
      <Welcome />
      <Features />
      <News />
    </div>
  );
};

export default Home;
