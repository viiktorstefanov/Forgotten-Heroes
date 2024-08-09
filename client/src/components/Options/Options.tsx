import React from 'react';
import styles from './Options.module.css';

import Option from '../Option/Option';

type OptionsProps = {
    options: string[],
}

const Options: React.FC<OptionsProps> = ( { options } ) => {
  return (
    <div className={styles['options']}>
        <Option option={options[0]}/>
        <Option option={options[1]}/>
        <Option option={options[2]}/>
        <Option option={options[3]}/>
    </div>
  )
}

export default Options;
