import React, { useEffect, useState } from 'react';
import styles from './PlayGame.module.css';

import { useNavigate, useParams } from 'react-router-dom';

import Timer from '../Timer/Timer';
import Question from '../Question/Question';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { getLevelQuestions } from '../../state/questions/questionsThunks';
import { resetResults, setCurrentLevel } from '../../state/questions/questionsSlice';

const PlayGame: React.FC = () => {
    const { levelNumber } = useParams();
    
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const level = useSelector((state: RootState) => state.levels.levels!).find(l => l.levelNumber === +levelNumber!);
    
    useEffect(() => {
      if (levelNumber) {
        if(level) {
            dispatch(setCurrentLevel(level))
        }
        dispatch(getLevelQuestions({ level: +levelNumber}));
        dispatch(resetResults());
      }
    }, []);
  
    const questions = useSelector((state: RootState) => state.questions.questions!);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const resetTimerAndSwichQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            navigate('/game/result')
        }
    };

    return (
        <div className={styles['playgame-container']}>
            {questions && questions.length > 0 && (
                <>
                    <Question
                        question={questions[currentQuestionIndex]}
                        key={questions[currentQuestionIndex]._id}
                        resetTimerAndSwichQuestion={resetTimerAndSwichQuestion}
                    />
                   <Timer duration={30} onComplete={resetTimerAndSwichQuestion} restart={currentQuestionIndex} question={questions[currentQuestionIndex]}/>
                </>
            )}

        </div>
    );
};

export default PlayGame;
