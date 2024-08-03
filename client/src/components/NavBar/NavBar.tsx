import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const NavBar: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <nav className={styles["nav-bar-list"]}>
      <Link className={styles["nav-bar-item"]} to="/">
        НАЧАЛО
      </Link>
      <Link className={styles["nav-bar-item"]} to="/game">
        ИГРАЙ
      </Link>
      <Link className={styles["nav-bar-item"]} to="/heroes">
        ГЕРОИ
      </Link>
      <Link className={styles["nav-bar-item"]} to="/rank">
        КЛАСАЦИЯ
      </Link>
      {!isAuthenticated && (
        <Link className={styles["nav-bar-item"]} to="/login">
          ВХОД
        </Link>
      )}
      {isAuthenticated && (
        <Link className={styles["nav-bar-item"]} to="/logout">
          ИЗХОД
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
