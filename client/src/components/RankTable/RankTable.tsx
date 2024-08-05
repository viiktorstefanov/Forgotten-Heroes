import React from "react";
import styles from "./RankTable.module.css";
import RankTableHead from "../RankTableHead/RankTableHead";
import RankTableRow from "../RankTableRow/RankTableRow";

const RankTable: React.FC = () => {
  return (
    <div className={styles["rank-table"]}>
      <RankTableHead />
      <RankTableRow />
      <RankTableRow />
      <RankTableRow />
      <RankTableRow />
      <RankTableRow />
    </div>
  );
};

export default RankTable;
