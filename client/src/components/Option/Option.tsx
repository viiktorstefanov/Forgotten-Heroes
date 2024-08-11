import React from 'react';
import styles from './Option.module.css';

import { Question } from '../../services/QuestionService';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../state/store';
import { saveResult } from '../../state/questions/questionsSlice';

type OptionProps = {
  option: string,
  resetTimerAndSwichQuestion: () => void,
  question: Question,
}

const Option: React.FC<OptionProps> = ( { option, resetTimerAndSwichQuestion, question } ) => {

  const dispatch = useDispatch<AppDispatch>()

  const onClick = () => {
    const resultData = {
      ...question,
      userChoice: option
    };

    dispatch(saveResult(resultData));

    resetTimerAndSwichQuestion();
  }

  return (
    <div className={styles['option']} onClick={onClick}>
       <span>{option}</span>
    </div>
  )
}

export default Option;
