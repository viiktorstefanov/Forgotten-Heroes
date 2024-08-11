import React from 'react';
import styles from './Question.module.css';

import Options from '../Options/Options';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import Option from '../Option/Option';
import { Question as QuestionData } from '../../services/QuestionService';

type QuestionProps = {
    question: QuestionData,
    resetTimerAndSwichQuestion: () => void
}

const Question: React.FC<QuestionProps> = ( {question, resetTimerAndSwichQuestion } ) => {
  
  return (
    <div className={styles['question-container']}>
        <QuestionTitle question={question.question}/>
        <Options>
          <Option option={question.options[0]} question={question} resetTimerAndSwichQuestion={resetTimerAndSwichQuestion}/>
          <Option option={question.options[1]} question={question} resetTimerAndSwichQuestion={resetTimerAndSwichQuestion} />
          <Option option={question.options[2]} question={question} resetTimerAndSwichQuestion={resetTimerAndSwichQuestion} />
          <Option option={question.options[3]} question={question} resetTimerAndSwichQuestion={resetTimerAndSwichQuestion} />
        </Options>
    </div>
  )
}

export default Question;
