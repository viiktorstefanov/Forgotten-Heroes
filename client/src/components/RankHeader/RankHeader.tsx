import React, { ReactNode } from 'react';
import styles from './RankHeader.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';

type RankHeaderProps = {
    children: ReactNode
};

const RankHeader: React.FC<RankHeaderProps> = ( { children }) => {
  return (
    <>
      <FontAwesomeIcon icon={faRankingStar} className={styles['rank-icon']}/>
      <h2 className={styles['rank-header']}>{children}</h2>
    </>
  )
}

export default RankHeader;
