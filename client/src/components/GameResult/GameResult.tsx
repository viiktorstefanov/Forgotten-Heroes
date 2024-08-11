import React, { useEffect } from 'react';
import styles from './GameResult.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';

import { updatePoints } from '../../state/auth/authThunks';
import SuccessResult from '../SuccessResult/SuccessResult';


const GameResult: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user)!;
    const level = useSelector((state: RootState) => state.questions.currentLevel)!;
    
    const dispatch = useDispatch<AppDispatch>();
    const points = {
        points: level?.winPoints,
        levelNumber: level.levelNumber,
    };

    useEffect(() => {
        dispatch(updatePoints({ user, points }));
    }, [])

    const result = useSelector((state: RootState) => state.questions.result);
    const numberCorrectAnswer = useSelector((state: RootState) => state.questions.numberCorrectAnswer);

  return (
    <div className={styles['result-container']}>
          <SuccessResult numberCorrectAnswer={numberCorrectAnswer!} level={level} numberQuestions={result?.length!}/>
    </div>
  )
}

export default GameResult;
