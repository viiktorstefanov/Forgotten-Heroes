import React from 'react';
import styles from './PlayGame.module.css';

import Timer from '../Timer/Timer';
import { useNavigate, useParams } from 'react-router-dom';
import Question from '../Question/Question';

const PlayGame: React.FC = () => {
    const { levelNumber } = useParams();

    
    const navigate = useNavigate();

    const onComplete = () => {
        console.log('vremeto svurshi');
        // navigate('/game/level/3')
    }

  return (
    <div className={styles['playgame-container']}>
      <Question question='Как се прави въстание' options={['бъдеще в духовното дело', 'бъдеще в духовното дело', 'бъдеще в духовното дело', 'бъдеще в духовното дело да се']} answer='бъдеще в духовното дело'/>
      <Timer duration={30} onComplete={onComplete}/>
    </div>
  )
}

export default PlayGame;
