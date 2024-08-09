import React from 'react';
import styles from './Question.module.css';

import Options from '../Options/Options';
import QuestionTitle from '../QuestionTitle/QuestionTitle';

type QuestionProps = {
    question: string,
    answer: string,
    options: string[],
}

const Question: React.FC<QuestionProps> = ( {question, answer, options } ) => {
  return (
    <div className={styles['question-container']}>
        <QuestionTitle question={question}/>
        <Options options={options}/>
    </div>
  )
}

export default Question;
