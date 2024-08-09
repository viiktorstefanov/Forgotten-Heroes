import React from 'react';
import styles from './Option.module.css';

type OptionProps = {
    option: string,
}

const Option: React.FC<OptionProps> = ( { option} ) => {
  return (
    <div className={styles['option']}>
       <span>{option}</span>
    </div>
  )
}

export default Option;
