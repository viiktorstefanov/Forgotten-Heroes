import React from 'react';
import styles from './Level.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen, faStar } from '@fortawesome/free-solid-svg-icons';

type LevelProps = {
    label: string,
    requiredPoints: number
}

const Level: React.FC<LevelProps> = ( { label, requiredPoints } ) => {
  return (
    <div className={styles['level-container']}>
       <h2>{label} НИВО</h2>
         <FontAwesomeIcon className={styles['unlock-icon']} icon={faLockOpen} />
         <div className={styles['points-wrapper']}>
            <span>Точки:</span>
            <span><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> {requiredPoints} </span>
         </div>
    </div>
  )
}

export default Level;
