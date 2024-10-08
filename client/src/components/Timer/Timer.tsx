import React from 'react';
import styles from './Timer.module.css';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { saveResult } from '../../state/questions/questionsSlice';
import { Question } from '../../services/QuestionService';

type TimerProps = {
  duration: number;
  onComplete: () => void;
  restart: number,
  question: Question,
}

const Timer: React.FC<TimerProps> = ({ duration, onComplete, restart, question }) => {
  
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useSelector((state: RootState) => state.screen.isMobile);

  return (
    <div className={styles['timer-container']}>
      <CountdownCircleTimer
        size={isMobile ? 80 : 100}
        strokeWidth={isMobile ? 5 : 8}
        isSmoothColorTransition={true}
        key={restart}
        isPlaying
        duration={duration}
        colors={['#f3d22d', '#F7B801', '#A30000']}
        colorsTime={[10, 5, 0]}
        onComplete={() => {
          const resultData = {
            ...question,
            userChoice: ''
          };
          dispatch(saveResult(resultData));
          onComplete(); 
        }}
      >
        {({ remainingTime }) => 
              <div style={{ fontSize: '1.5rem', color: '#f3d22d' }}>{remainingTime}</div>
        }
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
