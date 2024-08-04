import React from 'react';
import styles from './RulesHeader.module.css';

const RulesHeader: React.FC = () => {
  return (
    <h2 className={styles['rules-header']}>Правила за ползване</h2>
  )
}

export default RulesHeader;
