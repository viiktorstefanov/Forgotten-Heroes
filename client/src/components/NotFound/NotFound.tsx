import React from 'react';
import styles from './NotFound.module.css';
import { app } from '../../constants/app';

const NotFound: React.FC = () => {
  return (
          <>
            <h1 className={styles['error-header']}>{app.errorHeader}</h1>
            <h3 className={styles['error-msg']}>{app.errorMsg}</h3>
          </>
        );
};

export default NotFound;
