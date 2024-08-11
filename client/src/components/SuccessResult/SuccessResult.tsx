import React, { useEffect, useState } from 'react';
import styles from './SuccessResult.module.css';


import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFaceGrinStars } from '@fortawesome/free-solid-svg-icons';
import { Level } from '../../services/LevelService';

import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize';

type SuccessResultProps = {
    numberCorrectAnswer: number,
    level: Level,
    numberQuestions: number,
}

const SuccessResult: React.FC<SuccessResultProps> = ( { numberCorrectAnswer, level, numberQuestions }) => {

    const [showConfetti, setShowConfetti] = useState(true);
    const { width, height } = useWindowSize();

    useEffect(() => {
        setTimeout(( ) => {
            setShowConfetti(false)
        }, 10000)
    })

  return (
    <div className={styles['success-result-container']}>
        {showConfetti && <Confetti width={width} height={height} />}
        <div className={styles['greetings']}>
            <FontAwesomeIcon icon={faFaceGrinStars} className={styles['emoticon']}/>
            <h1>Поздравления</h1>
        </div>
        <div className={styles['results']}>
            <h2>Твоят резултат е:</h2>
            <h2>{numberCorrectAnswer} от {numberQuestions}</h2>
        </div>
            <h2 className={styles['points']} >Получаваш <FontAwesomeIcon className={styles['points-icon']} icon={faStar}/> {level?.winPoints} точки</h2>
        <div className={styles['routes']}>
            <Link to={'/game'} className={styles['left-arrow']}><span className={styles['back']}>НАЗАД</span></Link>
            <Link to={`/game/level/${level.levelNumber + 1}`} className={styles['right-arrow']}><span className={styles['next-level']} >СЛЕДВАЩО НИВО</span></Link>
        </div>
    </div>
  )
}

export default SuccessResult;
