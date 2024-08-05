import React from 'react';
import styles from './Heroes.module.css';
import Categories from '../Categories/Categories';

const Heroes: React.FC = () => {
  return (
    <section className={styles["heroes-container"]}>
      <Categories />
    </section>
  );
};

export default Heroes;
