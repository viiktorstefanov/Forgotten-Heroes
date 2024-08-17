import React from 'react';
import styles from './QuestionTitle.module.css';

type QuestionTitleProps = {
    question: string
}

const QuestionTitle: React.FC<QuestionTitleProps> = ( { question } ) => {
  return (
    <div className={styles['question']}>
            <span>{question}</span>
    </div>
  )
}

export default QuestionTitle;
