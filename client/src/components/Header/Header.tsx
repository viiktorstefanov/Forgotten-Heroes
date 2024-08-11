import React, { ReactNode, useEffect } from "react";
import styles from "./Header.module.css";

import { scroller } from 'react-scroll';
import { useLocation } from "react-router-dom";

type HeaderProps = {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {

  const location = useLocation();

  useEffect(() => {
    scroller.scrollTo('top', {
      duration: 0,     
      delay: 0,           
      smooth: 'easeInOutQuart'
    });

  }, [location]);

  return (
    <section id="top" className={styles['nav-container']}>
      {children}
    </section>
  );
};

export default Header;