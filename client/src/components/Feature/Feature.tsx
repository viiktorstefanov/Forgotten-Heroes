import React from 'react';
import styles from './Feature.module.css';

interface FeatureProps {
  imgSrc: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, description }) => {
  return (
    <div className={styles['feature']}>
      <img src={imgSrc} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
