import React from 'react';
import styles from './Levels.module.css';
import Level from '../Level/Level';
import LockedLevel from '../LockedLevel/LockedLevel';
import { levels } from '../../constants/levels';

const Levels: React.FC = () => {

    const user = {
        points: 0
    };

  return (
    <div className={styles['levels-container']}>
      {levels.map((level) => {
        return level.requiredPoints <=  user.points ?  <Level label={level.label} requiredPoints={level.requiredPoints} key={level.id}/> : <LockedLevel label={level.label} requiredPoints={level.requiredPoints} key={level.id}/>
      })}
    </div>
  )
}

export default Levels;
