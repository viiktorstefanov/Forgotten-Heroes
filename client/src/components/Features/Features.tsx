import React from 'react';
import styles from './Features.module.css';

import Feature from '../Feature/Feature';
import Border from '../Border/Border';

import { FeatureData } from '../../constants/feature';

const Features: React.FC = () => {
  return (
    <div className={styles['features-container']}>
        <Border />
        <Feature 
           imageUrl={FeatureData.imageUrl}
           header={FeatureData.header}
           personName={FeatureData.personName}
           subtitle={FeatureData.subtitle}
           buttonText={FeatureData.buttonText}
           buttonRoute={FeatureData.buttonRoute}
        />
        <Border />
    </div>
  )
}

export default Features;
