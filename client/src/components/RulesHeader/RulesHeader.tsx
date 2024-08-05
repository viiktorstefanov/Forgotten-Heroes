import React, { ReactNode } from 'react';
import styles from './RulesHeader.module.css';

type RulesHeaderProps = {
  children: ReactNode
};

const RulesHeader: React.FC<RulesHeaderProps> = ( { children }) => {
  return (
    <h2 className={styles['rules-header']}>{children}</h2>
  )
}

export default RulesHeader;
