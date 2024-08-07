import React from 'react';
import styles from './WelcomeSubtitle.module.css';

type WelcomeSubtitleProps = {
    subtitle: string,
}

const WelcomeSubtitle: React.FC<WelcomeSubtitleProps> = ( { subtitle } ) => {
  return (
    <p className={styles['subtitle']}>{subtitle}</p>
  )
}

export default WelcomeSubtitle;
