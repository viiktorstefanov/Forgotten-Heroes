import React from 'react';
import styles from './LevelDone.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';

type LevelDoneProps = {
    label: string,
    requiredPoints: number,
    userPoints: number
}

const LevelDone: React.FC<LevelDoneProps> = ( { label, requiredPoints, userPoints }) => {
  return (
    <div className={styles['level-done-container']}>
       <h2>{label} НИВО</h2>
         <FontAwesomeIcon className={styles['done-icon']} icon={faCheck} />
         <div className={styles['points-wrapper']}>
            <span>Точки:</span>
            <span><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> {userPoints} / {requiredPoints} </span>
         </div>
    </div>
  )
}

export default LevelDone;
