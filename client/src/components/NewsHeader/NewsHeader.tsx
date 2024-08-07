import React from 'react';
import styles from './NewsHeader.module.css';

type NewsHeaderProps = {
    header: string
}

const NewsHeader: React.FC<NewsHeaderProps> = ( { header } ) => {
  return (
    <h2 className={styles['header']}>{header}</h2>
  )
}

export default NewsHeader;
