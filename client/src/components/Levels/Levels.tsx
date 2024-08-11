import React, { useEffect } from 'react';
import styles from './Levels.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { getLevels } from "../../state/levels/levelsThunks";
import { getUserPoints } from '../../state/auth/authThunks';
import { renderFirstLevel, renderOtherLevels } from '../../services/LevelService';
import { resetCurrentLevel } from '../../state/questions/questionsSlice';

const Levels: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const userId = useSelector((state: RootState) => state.auth.user?._id)!;

  useEffect(() => {
    if (userId) {
      dispatch(getUserPoints(userId));
      dispatch(getLevels({ userId }));
      dispatch(resetCurrentLevel());
    }
  }, []);

  const levels = useSelector((state: RootState) => state.levels.levels);
  const user = useSelector((state: RootState) => state.auth.user)!; 
  
  return (
    <div className={styles['levels-container']}>
      {levels && levels.map(level =>
        level.levelNumber === 1
          ? renderFirstLevel(level)
          : renderOtherLevels(level, user.points)
      )}
    </div>
  )
}


export default Levels;