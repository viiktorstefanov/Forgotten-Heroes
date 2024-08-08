import React from 'react';
import styles from './Categories.module.css';

import { heroCategories } from '../../constants/heroes';
import CategoryItem from '../CategoryItem/CategoryItem';

const Categories: React.FC = () => {
  return (
    <div className={styles["category-container"]}>
        {heroCategories.map(item => 
                    <CategoryItem 
                        key={item.id} 
                        category={item.category}
                        imageUrl={item.imageUrl} 
                        route={item.route} 
                    />
        )}
  </div>
  )
}

export default Categories;
