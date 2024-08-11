import React, { useEffect, useState } from 'react';
import styles from './SuccessResult.module.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFaceGrinStars } from '@fortawesome/free-solid-svg-icons';

import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize';

import { successData } from '../../constants/result';

type SuccessResultProps = {
    numberCorrectAnswer: number,
    levelNumber: number,
    numberQuestions: number,
    winPoints: number,
}

const SuccessResult: React.FC<SuccessResultProps> = ( { numberCorrectAnswer, levelNumber, numberQuestions, winPoints }) => {

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
        <div className={styles['sucess-header']}>
            <FontAwesomeIcon icon={faFaceGrinStars} className={styles['emoticon']}/>
            <h1>{successData.header}</h1>
        </div>
        <div className={styles['results']}>
            <h2>{successData.resultHeader}</h2>
            <h2>{numberCorrectAnswer} {successData.resultPointsCompare} {numberQuestions}</h2>
        </div>
            <h2 className={styles['points']} >{successData.resultMsgReceive} <FontAwesomeIcon className={styles['points-icon']} icon={faStar}/> {winPoints} {successData.resultMsgPoints}</h2>
        <div className={styles['routes']}>
            <Link to={'/game'} className={styles['left-arrow']}><span className={styles['back']}>{successData.buttonTextBack}</span></Link>
            <Link to={`/game/level/${levelNumber + 1}`} className={styles['right-arrow']}><span className={styles['next-level']} >{successData.buttonTextNext}</span></Link>
        </div>
    </div>
  )
}

export default SuccessResult;
