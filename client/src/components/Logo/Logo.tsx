import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import { app } from "../../constants/app";

const Logo: React.FC = () => {
  return (
    <div className={styles["nav-bar-logo"]}>
      <Link to="/">
        <h1>{app.header}</h1>
      </Link>
    </div>
  );
};

export default Logo;
