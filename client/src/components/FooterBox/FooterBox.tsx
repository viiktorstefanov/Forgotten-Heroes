import React, { ReactNode } from 'react';
import styles from './FooterBox.module.css';

type FooterBoxProps = {
    children: ReactNode;
  }

const FooterBox: React.FC<FooterBoxProps> = ( { children }) => {
  return (
    <div className={styles["footer-box"]}>
        {children}
    </div>
  )
}

export default FooterBox;
