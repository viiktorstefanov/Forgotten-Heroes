import React from 'react';
import styles from './PlayGame.module.css';

import { useParams } from 'react-router-dom';

const PlayGame: React.FC = () => {

    const { levelId } = useParams();

  return (
    <div>
      <h2>level</h2>
    </div>
  )
}

export default PlayGame;
