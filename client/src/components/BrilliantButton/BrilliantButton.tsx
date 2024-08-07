import React from 'react';
import styles from './BrilliantButton.module.css';

import { Link } from 'react-router-dom';

type BrilliantButtonProps = {
    text: string,
    route: string,
}

const BrilliantButton: React.FC<BrilliantButtonProps> = ( { text, route } ) => {
  return (
    <Link to={route}><button className={styles['brilliant-button']}>{text}</button></Link>
  )
}

export default BrilliantButton;
