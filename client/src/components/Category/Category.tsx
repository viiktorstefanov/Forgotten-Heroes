import React from 'react';
import styles from './Category.module.css';
import HeroesList from '../HeroesList/HeroesList';

import { useLocation } from 'react-router-dom';

const Category: React.FC = () => {

  const location = useLocation();
  const categoryTitle = location.pathname.split('/heroes')[1];

  return (
    <section className={styles["category-container"]}>
      <HeroesList categoryTitle={categoryTitle}/>
    </section>
  )
}

export default Category;
