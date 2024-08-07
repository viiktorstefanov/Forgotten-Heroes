import React from "react";
import styles from './Home.module.css';

import Feature from "../Feature/Feature";
import Welcome from "../Welcome/Welcome";
import News from "../News/News";

const Home: React.FC = () => {
  return (
    <div className={styles['home-container']}>
      <Welcome />
      <News />
      <div className="features">
        <Feature
          imgSrc="\assets\images\boyat-na-shipka.jpg"
          title="Личност на седмицата"
          description="Тази седмица ще се запознаем с живота и делото на Иван Асен II - велик цар на България!"
        />
      </div>
    </div>
  );
};

export default Home;
