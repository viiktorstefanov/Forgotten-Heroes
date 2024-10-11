import React from 'react';
import styles from './RankTableRow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { UserPointsData } from '../../services/AuthService';

type RankTableRowProps = {
  user: UserPointsData | null,
  index: number,
};

const RankTableRow: React.FC<RankTableRowProps> = ( { user, index }) => {
  return (
    <div className={styles["rank-table-tr"]}>
        <div className={styles['user-info']}>
          <span className={styles['user-index']}>{index + 1}.</span>
          <span className={styles['table-tr-user']}><FontAwesomeIcon className={styles['user-icon']} icon={faUser} /> {user?.username}</span>
        </div>
        <span className={styles['table-tr-points']}><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> {user?.points}</span>
    </div>
  )
}

export default RankTableRow;