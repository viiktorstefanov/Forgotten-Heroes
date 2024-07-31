import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles["footer-container"]}>
      <div className={styles["footer-border"]}></div>
      <div className={styles["footer-box"]}>
        All rights reserved.
        <br />
        &copy; {currentYear} Copyright:{" "}
        <Link
          className="footer-link"
          target="_blank"
          to="https://www.linkedin.com/in/viktorstefanov"
        >
          Viktor Stefanov
        </Link>
      </div>
    </section>
  );
};

export default Footer;
