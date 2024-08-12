import React from 'react';
import styles from './RulesList.module.css';
import { appPurposeInfo, gamePlayInfo, gamePurposeInfo, gameSectionInfo, heroesSection, nextLevelInfo, ownerInfo, pointsInfo, rankSection, timerInfo } from '../../constants/rules';
import { Link } from 'react-router-dom';

const RulesList: React.FC = () => {
  return (
    <ol className={styles['rules-list']}>
        <li className={styles['row']}><span>{appPurposeInfo.header}</span></li>

        <li className={styles['row']}><span>{gameSectionInfo.header}</span></li>
        <ul>
          <li>2.1  {gamePurposeInfo.header}:</li>
          <br></br>
          <p>{gamePurposeInfo.description}</p>
          <br />

          <li>2.2  {gamePlayInfo.header}:</li>
          <br></br>
          <ul>
            {gamePlayInfo.subpoints.map((subpoints) => {
              return (
                <li key={subpoints.id}>
                  <span className={styles['m-left']}>{subpoints.header}</span>
                  <p className={styles['m-left-child']}><br/>{subpoints.description}</p>
                  <br/>
                </li>
                )
              })}
          </ul>

          <li>2.3  {timerInfo.header}:</li>
          <br></br>
          <ul>
            {timerInfo.subpoints.map((subpoints) => {
              return (
                <li key={subpoints.id}>
                  <span className={styles['m-left']}>{subpoints.header}</span>
                  <p className={styles['m-left-child']}><br/>{subpoints.description}</p>
                  <br/>
                </li>
                )
              })}
          </ul>

          <li>2.4  {nextLevelInfo.header}:</li>
          <br></br>
          <ul>
            {nextLevelInfo.subpoints.map((subpoints) => {
              return (
                <li key={subpoints.id}>
                  <span className={styles['m-left']}>{subpoints.header}</span>
                  <p className={styles['m-left-child']}><br/>{subpoints.description}</p>
                  <br/>
                </li>
                )
              })}
          </ul>

          <li>2.5  {pointsInfo.header}:</li>
          <br></br>
          <ul>
            {pointsInfo.subpoints.map((subpoints) => {
              return (
                <li key={subpoints.id}>
                  <span className={styles['m-left']}>{subpoints.header}</span>
                  <p className={styles['m-left-child']}><br/>{subpoints.description}</p>
                  <br/>
                </li>
                )
              })}
          </ul>

        </ul>

        <li className={styles['row']}><span>{heroesSection.header}</span></li>
        <p>{heroesSection.description}</p>

        <li className={styles['row']}><span>{rankSection.header}</span></li>
        <p>{rankSection.description}</p>

        <li className={styles['row']}><span>{ownerInfo.header}</span></li>
        <p>{ownerInfo.description} <strong><Link to="victorystefanov@gmail.com">victorystefanov@gmail.com</Link></strong></p>
    </ol>
  )
}

export default RulesList;
