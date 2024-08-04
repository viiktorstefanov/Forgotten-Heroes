import React, { ReactNode } from "react";
import styles from "./Footer.module.css";

type FooterProps = {
  children: ReactNode
}

const Footer: React.FC<FooterProps> = ( { children }) => {
  

  return (
    <section className={styles["footer-container"]}>
      {children}
    </section>
  );
};

export default Footer;
