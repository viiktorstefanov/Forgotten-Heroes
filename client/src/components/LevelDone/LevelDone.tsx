import React from 'react';
import styles from './LevelDone.module.css';
import { Tooltip } from 'react-tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type LevelDoneProps = {
    label: number,
    requiredPoints: number,
    winPoints: number,
    userScore: number
}

const LevelDone: React.FC<LevelDoneProps> = ( { label, requiredPoints, winPoints, userScore  }) => {
  const tooltipMessage = `НАТИСНИ, ЗА ДА ЗАПОЧНЕШ ОТНОВО НИВО ${label}`;
  return (
    <Link to={`/game/level/${label}`}>
      <div className={styles['level-done-container']} data-tooltip-id="done" data-tooltip-content={tooltipMessage}>
        <Tooltip id="done" />
        <h2>{label} НИВО</h2>
          <FontAwesomeIcon className={styles['done-icon']} icon={faCheck} />
          <div className={styles['points-wrapper']}>
            <span>Точки:</span>
            <span><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> {userScore} / {winPoints} </span>
          </div>
      </div>
    </Link>
  )
}

export default LevelDone;
