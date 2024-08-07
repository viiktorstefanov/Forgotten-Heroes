import React from 'react';
import styles from './CategoryItem.module.css';
import { Link } from 'react-router-dom';

type CategoryItemProps = {
    category: string,
    imageUrl: string,
    route: string,
};

const CategoryItem: React.FC<CategoryItemProps> = ( { category, imageUrl, route} ) => {
  return (
    <Link to={route} className={styles["category-item"]}>
          <div className={styles['category-item-img']}>
            <img src={imageUrl} alt={category} loading="lazy"/>
          </div>
          <div className={styles['category-item-header']}>
            <h2>{category}</h2>
          </div>
    </Link>
  )
}

export default CategoryItem;
