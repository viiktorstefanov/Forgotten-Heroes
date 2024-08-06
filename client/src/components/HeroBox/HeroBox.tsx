import React from 'react';
import styles from './HeroBox.module.css';
import { Hero } from '../../services/HeroService';

type HeroBoxProps = {
    hero: Hero | null,
}

const HeroBox: React.FC<HeroBoxProps> = ( { hero }) => {
  return (
    <div>
        <div className={styles["hero-box"]}>
          <div className={styles["hero-img"]}>
            <img src={hero?.imageUrl} alt={hero?.title} loading="lazy" />
          </div>
          <div className={styles["hero-text"]}>
            <h1>{hero?.title}</h1>
            <h2>{`( ${hero?.dateBirth} - ${hero?.dateDeath} )`}</h2>
            <p>{hero?.historyMain}</p>
          </div>
        </div>
        <p className={styles["hero-additional-text"]}>
          {hero?.historyAdditional}
        </p>
      </div>
  )
}

export default HeroBox;
