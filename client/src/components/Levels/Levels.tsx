import React from 'react';
import styles from './Levels.module.css';

import Level from '../Level/Level';
import LockedLevel from '../LockedLevel/LockedLevel';
import LevelDone from '../LevelDone/LevelDone';

import { levels } from '../../constants/levels';

const Levels: React.FC = () => {

    const user = {
        points: 0
    };

  return (
    <div className={styles['levels-container']}>
      {levels.map((level) => {
        if(+level.label === 1) {
          return <Level label={level.label} requiredPoints={level.requiredPoints} key={level.id} userPoints={user.points}/>
        }
        if(+level.label === 2) {
          return <LevelDone label={level.label} requiredPoints={level.requiredPoints} key={level.id} userPoints={user.points}/>
        }
        if(level.requiredPoints <=  user.points) {
          return <Level label={level.label} requiredPoints={level.requiredPoints} key={level.id} userPoints={user.points}/>
        } else {
          return <LockedLevel label={level.label} requiredPoints={level.requiredPoints} key={level.id}/>
        }
      })}
    </div>
  )
}

export default Levels;
