import React, { ReactNode } from 'react';
import styles from './Options.module.css';

import Option from '../Option/Option';

type OptionsProps = {
    children: ReactNode
}

const Options: React.FC<OptionsProps> = ( { children } ) => {
  return (
    <div className={styles['options']}>
       {children}
    </div>
  )
}

export default Options;