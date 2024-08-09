import React, { useState } from 'react';
import styles from './Timer.module.css';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type TimerProps = {
  duration: number;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onComplete }) => {
  const [key, setKey] = useState(0);

  const restartTimer = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div className={styles['timer-container']}>
      <CountdownCircleTimer
        size={100}
        strokeWidth={8}
        isSmoothColorTransition={true}
        key={key}
        isPlaying
        duration={duration}
        colors={['#f3d22d', '#F7B801', '#A30000']}
        colorsTime={[10, 5, 0]}
        onComplete={() => {
          onComplete(); 
          restartTimer();
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
