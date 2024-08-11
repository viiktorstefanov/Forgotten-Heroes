import React, { useEffect } from 'react';
import styles from './GameResult.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';

import { updatePoints } from '../../state/auth/authThunks';
import SuccessResult from '../SuccessResult/SuccessResult';
import FailResult from '../FailResult/FailResult';


const GameResult: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user)!;
    const level = useSelector((state: RootState) => state.questions.currentLevel)!;
    const result = useSelector((state: RootState) => state.questions.result)!;
    const numberCorrectAnswer = useSelector((state: RootState) => state.questions.numberCorrectAnswer);
    
    const dispatch = useDispatch<AppDispatch>();

    const successful = (numberCorrectAnswer === result?.length);

    useEffect(() => {
    
        if(successful) {

          const points = {
            points: level?.winPoints,
            levelNumber: level.levelNumber,
          };

          dispatch(updatePoints({ user, points }));   
        }
    }, [])

   

  return (
    <div className={styles['result-container']}>
      {successful && <SuccessResult numberCorrectAnswer={numberCorrectAnswer!} levelNumber={level.levelNumber} numberQuestions={result.length} winPoints={level.winPoints}/>}
      {!successful && <FailResult numberCorrectAnswer={numberCorrectAnswer!} levelNumber={level.levelNumber} numberQuestions={result.length} result={result} />}
    </div>
  )
}

export default GameResult;
