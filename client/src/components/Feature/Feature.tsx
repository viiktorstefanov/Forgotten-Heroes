import React from "react";
import styles from "./Feature.module.css";

import Button from "../Button/Button";

interface FeatureProps {
  imageUrl: string;
  header: string;
  personName: string;
  subtitle: string;
  buttonText: string;
  buttonRoute: string;
}

const Feature: React.FC<FeatureProps> = ({
  imageUrl,
  header,
  personName,
  subtitle,
  buttonText,
  buttonRoute,
}) => {
  return (
    <div className={styles["feature"]}>
      <h2 className={styles["header"]}>{header}</h2>
      <div className={styles["body"]}>
        <div className={styles['body-info']}>
          <h1 className={styles['body-info-header']}>{personName}</h1>
          <p className={styles['body-info-subtitle']}>{subtitle}</p>
          <Button route={buttonRoute} text={buttonText} />
        </div>
        <img src={imageUrl} alt={personName} />
      </div>
    </div>
  );
};

export default Feature;
