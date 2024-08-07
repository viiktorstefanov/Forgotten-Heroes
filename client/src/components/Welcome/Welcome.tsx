import React from 'react';
import styles from './Welcome.module.css';

import { WelcomeImageData } from '../../constants/welcome';
import { WelcomeHeaderData } from '../../constants/welcome';
import { WelcomeSubtitleData } from '../../constants/welcome';
import { WelcomeButtonData } from '../../constants/welcome';

import WelcomeImage from '../WelcomeImage/WelcomeImage';
import WelcomeHeader from '../WelcomeHeader/WelcomeHeader';
import WelcomeSubtitle from '../WelcomeSubtitle/WelcomeSubtitle';
import BrilliantButton from '../BrilliantButton/BrilliantButton';

const Welcome: React.FC = () => {
  return (
    <div className={styles['welcome-container']}>
        <WelcomeImage 
            imageUrl={WelcomeImageData.imageUrl} 
            name={WelcomeImageData.name}
        />
        <WelcomeHeader 
            header={WelcomeHeaderData.header}
        />
        <WelcomeSubtitle 
            subtitle={WelcomeSubtitleData.subtitle}
        />
        <BrilliantButton 
            text={WelcomeButtonData.text} 
            route={WelcomeButtonData.route}
        />
    </div>
  )
}

export default Welcome;
