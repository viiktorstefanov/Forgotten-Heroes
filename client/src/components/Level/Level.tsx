import React from 'react';
import styles from './Level.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen, faStar } from '@fortawesome/free-solid-svg-icons';

import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom';

type LevelProps = {
    label: number,
    requiredPoints: number,
    winPoints: number,
    userScore: number,
}

const Level: React.FC<LevelProps> = ( { label, requiredPoints, winPoints, userScore } ) => {
  const tooltipMessage = `НАТИСНИ, ЗА ДА ЗАПОЧНЕШ НИВО ${label}`;
  return (
    <Link to={`/game/level/${label}`}>
      <div className={styles['level-container']} data-tooltip-id="unlocked" data-tooltip-content={tooltipMessage}>
          <Tooltip id="unlocked" />
          <h2>{label} НИВО</h2>
          <FontAwesomeIcon className={styles['unlock-icon']} icon={faLockOpen} />
          <div className={styles['points-wrapper']}>
            <span>Точки:</span>
            <span><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> {userScore} / {winPoints} </span>
          </div>
      </div>
    </Link>
  )
}

export default Level;
