import React from 'react';
import styles from './LevelDone.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';

import { Level } from '../../services/LevelService';

type LevelDoneProps = {
    level: Level
}

const LevelDone: React.FC<LevelDoneProps> = ( { level  }) => {

  return (
      <div className={styles['level-done-container']} >
        <h2>{level.levelNumber} НИВО</h2>
          <FontAwesomeIcon className={styles['done-icon']} icon={faCheck} />
          <div className={styles['points-wrapper']}>
            <span>Точки:</span>
            <span><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> {level.score} / {level.winPoints} </span>
          </div>
      </div>
  )
}

export default LevelDone;
