import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <section className={styles['nav-container']}>
      <div className={styles['nav-bar-logo']}>
        <Link className={styles['nav-bar-item']} to="/"><h1>ЗАБРАВЕНИТЕ ГЕРОИ НА БЪЛГАРИЯ</h1></Link>
      </div>
      <div className={styles['nav-bar-border']}>
      </div>
      <nav className={styles['nav-bar-list']}>
          <Link className={styles['nav-bar-item']} to="/">НАЧАЛО</Link>
          <Link className={styles['nav-bar-item']} to="/game">ИГРАЙ</Link>
          <Link className={styles['nav-bar-item']} to="/heroes">ГЕРОИ</Link>
          <Link className={styles['nav-bar-item']} to="/rank">КЛАСАЦИЯ</Link>
      </nav>
    </section>
  );
};

export default Header;