import React from 'react';
import styles from './LockedLevel.module.css';
import { Tooltip } from 'react-tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faStar } from '@fortawesome/free-solid-svg-icons';

import { levelsTooltips } from '../../constants/levelsTooltips';

type LockedLevelPorps = {
    label: number,
    requiredPoints: number,
    winPoints: number,
}

const LockedLevel: React.FC<LockedLevelPorps> = ( { label, requiredPoints, winPoints } ) => {
  return (
    <div className={styles['locked-level-container']} data-tooltip-id="locked" data-tooltip-content={levelsTooltips.lockedLevel}>
        <Tooltip id="locked" />
        <h2>{label} НИВО</h2>
         <FontAwesomeIcon className={styles['lock-icon']} icon={faLock} />
         <div className={styles['required-points-wrapper']}>
            <span>Необходими точки:</span>
            <span><FontAwesomeIcon className={styles['points-icon']} icon={faStar} /> {requiredPoints} </span>
         </div>
    </div>
  )
}

export default LockedLevel;
