import React from 'react';
import styles from './FailResult.module.css';
import { Link } from 'react-router-dom';

import { ResultQuestion } from '../../services/QuestionService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons';

import { failData } from '../../constants/result';

type FailResultProps = {
    numberCorrectAnswer: number,
    levelNumber: number,
    numberQuestions: number,
    result: ResultQuestion[],
}

const FailResult: React.FC<FailResultProps> = ( { numberCorrectAnswer, levelNumber, numberQuestions, result } ) => {
  return (
    <div className={styles['fail-result-container']}>
        <div className={styles['fail-header']}>
            <FontAwesomeIcon icon={faFaceMeh} className={styles['emoticon']}/>
            <h1>{failData.header}</h1>
        </div>
        <div className={styles['results']}>
            <h2>{failData.resultHeader}</h2>
            <h2>{numberCorrectAnswer} {failData.resultPointsCompare} {numberQuestions}</h2>
        </div>
        <div className={styles['questions']}>
            <h1>{failData.questionHeader}</h1>
            {result.map((question, index) => {
                return (
                    <div className={styles['question-row']} key={question._id}>
                        <h3 className={styles['question-header']}>{`${index+1}.`}{question.question}?</h3>
                        <div className={styles['question-answers']}>
                            {question.userChoice !== question.answer && <>
                                <span className={`${styles['question-answer']} ${styles['wrong-answer']}`}>{failData.wrongAnswer} {question.userChoice}</span>
                                <span className={`${styles['question-answer']} ${styles['right-answer']}`}>{failData.rightAnswer} {question.answer}</span>
                            </>}
                            {question.userChoice === question.answer &&
                                <span className={`${styles['question-answer']} ${styles['right-answer']}`}>Твоят отговор: {question.userChoice}</span>
                            }
                        </div>
                    </div>
                )
            })}

        </div>
        <div className={styles['routes']}>
            <Link to={'/game'} className={styles['left-arrow']}><span className={styles['back']}>{failData.buttonTextBack}</span></Link>
            <Link to={`/game/level/${levelNumber}`} className={styles['right-arrow']}><span className={styles['repeat-level']} >{failData.buttonTextRepeat}</span></Link>
        </div>
    </div>
  )
}

export default FailResult;
