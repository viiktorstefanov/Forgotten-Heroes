import React from 'react';
import styles from './RulesList.module.css';
import { rules } from '../../constants/rules';
import Rule from '../Rule/Rule';


const RulesList: React.FC = () => {
  return (
    <ol className={styles['rules-list']}>
        {rules.map((rule) => (
                    <Rule key={rule.id} rule={rule.rule} />
        ))}
    </ol>
  )
}

export default RulesList;
