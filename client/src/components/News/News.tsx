import React from 'react';
import styles from './News.module.css';

import { NewsData } from '../../constants/news';
import BrilliantButton from '../BrilliantButton/BrilliantButton';
import NewsHeader from '../NewsHeader/NewsHeader';
import LastUpdate from '../LastUpdate/LastUpdate';

const News: React.FC = () => {
  return (
    <div className={styles['news-container']}>
      <NewsHeader header={NewsData.title}/>
      <LastUpdate />
      <BrilliantButton text={NewsData.buttonText} route={NewsData.buttonRoute}/>
  </div>
  )
}

export default News;
