import React from 'react';
import styles from './LastUpdate.module.css';

import { NewsData } from '../../constants/news';

const LastUpdate: React.FC = () => {
  return (
    <div className={styles['update-container']}>
        <div className={styles['img-wrapper']}>
            <img src={NewsData.imageUrl} alt={'news-image'} />
        </div>
      <p className={styles['header']}>{NewsData.text}</p>
    </div>
  )
}

export default LastUpdate;
