import React from 'react';
import styles from './RankTableRow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';

const RankTableRow: React.FC = () => {
  return (
    <div className={styles["rank-table-tr"]}>
        <span className={styles['table-tr-user']}><FontAwesomeIcon className={styles['user-icon']} icon={faUser} /> gosho@abv.bg</span>
        <span className={styles['table-tr-points']}><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> 50</span>
    </div>
  )
}

export default RankTableRow;