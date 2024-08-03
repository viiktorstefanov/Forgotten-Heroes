import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className={styles["nav-bar-logo"]}>
      <Link to="/">
        <h1>ЗАБРАВЕНИТЕ ГЕРОИ НА БЪЛГАРИЯ</h1>
      </Link>
    </div>
  );
};

export default Logo;
