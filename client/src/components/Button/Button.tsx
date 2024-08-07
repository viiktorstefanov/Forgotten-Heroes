import React from 'react';
import styles from './Button.module.css';

import { Link } from 'react-router-dom';

type ButtonProps = {
    text: string,
    route: string,
}

const Button: React.FC<ButtonProps> = ( { text, route} ) => {
  return (
    <Link to={route}><button className={styles['normal-button']}>{text}</button></Link>
  )
}

export default Button;
