import React from 'react';
import styles from './Rule.module.css';

type RuleProps = {
    rule: string,
}

const Rule: React.FC<RuleProps> = ( { rule} ) => {
  return (
    <li className={styles['row']}><span>{rule}</span></li>
  )
}

export default Rule;
