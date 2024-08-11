import React from 'react';
import styles from './Level.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen, faStar } from '@fortawesome/free-solid-svg-icons';

import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom';
import { Level as LevelData } from '../../services/LevelService';
import { levelsTooltips } from '../../constants/levelsTooltips';

type LevelProps = {
    level: LevelData
}

const Level: React.FC<LevelProps> = ( { level } ) => {

  return (
    <Link to={`/game/level/${level.levelNumber}`}>
      <div className={styles['level-container']} data-tooltip-id="unlocked" data-tooltip-content={levelsTooltips.level}>
          <Tooltip id="unlocked" />
          <h2>{level.levelNumber} НИВО</h2>
          <FontAwesomeIcon className={styles['unlock-icon']} icon={faLockOpen} />
          <div className={styles['points-wrapper']}>
            <span>Точки:</span>
            <span><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> {level.score} / {level.winPoints} </span>
          </div>
      </div>
    </Link>
  )
}

export default Level;
