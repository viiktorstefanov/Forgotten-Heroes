import React, { ReactNode } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <section className={styles['nav-container']}>
      {children}
    </section>
  );
};

export default Header;