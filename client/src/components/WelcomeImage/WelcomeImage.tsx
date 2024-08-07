import React from 'react';
import styles from './WelcomeImage.module.css';

type WelcomeImageProps = {
    imageUrl: string,
    name: string,
}

const WelcomeImage: React.FC<WelcomeImageProps> = ( { imageUrl, name } ) => {
  return (
    <div className={styles['img-wrapper']}>
        <img src={imageUrl} alt={name} />
    </div>
  )
}

export default WelcomeImage;
