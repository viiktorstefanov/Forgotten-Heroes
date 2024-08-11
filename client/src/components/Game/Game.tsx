import React from "react";
import styles from "./Game.module.css";
import Levels from "../Levels/Levels";

const Game: React.FC = () => {

  return (
    <div className={styles["game-container"]}>
        <Levels />
    </div>
  );
};

export default Game;
