import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

type heroProps = {
    imageUrl: string,
    title: string,
    heroId: string,
};

const Hero: React.FC<heroProps> = ( { imageUrl, title, heroId } ) => {
  return (
    <Link to={`/heroes/${heroId}`} className={styles["hero"]}>
      <div className={styles["hero-img"]}>
        <img src={imageUrl} alt="hero-img" loading="lazy"/>
      </div>
      <div className={styles["hero-header"]}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Hero;
