import React from 'react';
import styles from './WelcomeHeader.module.css';

type WelcomeHeaderProps = {
    header: string,
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ( { header } ) => {
  return (
    <h2 className={styles['header']}>{header}</h2>
  )
}

export default WelcomeHeader;
