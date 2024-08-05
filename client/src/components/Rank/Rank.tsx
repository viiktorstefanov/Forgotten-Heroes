import React from "react";
import styles from "./Rank.module.css";
import RankTable from "../RankTable/RankTable";
import RankHeader from "../RankHeader/RankHeader";

const Rank: React.FC = () => {
  return (
    <section className={styles["rank-container"]}>
      <RankHeader>
        Класация по точки
      </RankHeader>
      <RankTable />
    </section>
  );
};

export default Rank;
