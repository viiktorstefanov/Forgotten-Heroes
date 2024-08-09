import React from 'react';
import styles from './LockedLevel.module.css';
import { Tooltip } from 'react-tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faStar } from '@fortawesome/free-solid-svg-icons';

type LockedLevelPorps = {
    label: number,
    requiredPoints: number,
    winPoints: number,
}

const LockedLevel: React.FC<LockedLevelPorps> = ( { label, requiredPoints, winPoints } ) => {
  const tooltipMessage = `НЯМАШ ДОСТАТЪЧНО ТОЧКИ, ТРЯБВА ДА ПРЕМИНЕШ УСПЕШНО ${label-1} НИВО`;
  return (
    <div className={styles['locked-level-container']} data-tooltip-id="locked" data-tooltip-content={tooltipMessage}>
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
