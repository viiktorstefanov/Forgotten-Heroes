import React, { ReactNode } from 'react';
import styles from './RankHeader.module.css';

type RankHeaderProps = {
    children: ReactNode
};

const RankHeader: React.FC<RankHeaderProps> = ( { children }) => {
  return (
    <h2 className={styles['rank-header']}>{children}</h2>
  )
}

export default RankHeader;
