import React from "react";
import styles from "./Rank.module.css";
import RankTable from "../RankTable/RankTable";
import RankHeader from "../RankHeader/RankHeader";
import { rank } from "../../constants/rank";


const Rank: React.FC = () => {
  return (
    <section className={styles["rank-container"]}>
      <RankHeader>
        {rank.header}
      </RankHeader>
      <RankTable />
    </section>
  );
};

export default Rank;
