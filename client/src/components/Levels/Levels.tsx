import React, { useEffect } from 'react';
import styles from './Levels.module.css';

import Level from '../Level/Level';
import LockedLevel from '../LockedLevel/LockedLevel';
import LevelDone from '../LevelDone/LevelDone';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { getLevels } from "../../state/levels/levelsThunks";
import { getUserPoints } from '../../state/auth/authThunks';

const Levels: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const userId = useSelector((state: RootState) => state.auth.user?._id)!;

  
  useEffect(() => {
    if (userId) {
      dispatch(getUserPoints(userId));
      dispatch(getLevels({ userId }));
    }
  }, [userId, dispatch]);

  const levels = useSelector((state: RootState) => state.levels.levels);
  const user = useSelector((state: RootState) => state.auth.user)!; 

  return (
    <div className={styles['levels-container']}>
      {levels && levels!.map((level) => {
        if(level.levelNumber === 1) {
          if(level.requiredPoints <= user.points) {
            return <LevelDone label={level.levelNumber} requiredPoints={level.requiredPoints} key={level._id} userPoints={user.points}/>
          } else {
            return <Level label={level.levelNumber} requiredPoints={level.requiredPoints} key={level._id} userPoints={user.points}/>
          }
        }
        
        if(level.requiredPoints <=  user.points) {
          if(level.requiredPoints <= user.points) {
            return <LevelDone label={level.levelNumber} requiredPoints={level.requiredPoints} key={level._id} userPoints={user.points}/>
          } else {
            return <Level label={level.levelNumber} requiredPoints={level.requiredPoints} key={level._id} userPoints={user.points}/>
          }
        } else {
          return <LockedLevel label={level.levelNumber} requiredPoints={level.requiredPoints} key={level._id}/>
        }
      })}
    </div>
  )
}

export default Levels;
