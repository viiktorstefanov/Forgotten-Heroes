import React from 'react';
import styles from './RankTableHead.module.css';
import { tableHeaders } from '../../constants/table';

const RankTableHead: React.FC = () => {
  return (
    <div className={styles["rank-table-tr-head"]}>
        {tableHeaders.map(item => <span key={item.id}>{item.header}</span>)}
    </div>
  )
}

export default RankTableHead;
