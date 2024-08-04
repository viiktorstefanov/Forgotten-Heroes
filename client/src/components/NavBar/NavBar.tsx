import React from "react";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { routes } from '../../constants/routes';
import NavBarItem from "../NavBarItem/NavBarItem";

const NavBar: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const filteredRoutes = routes.filter(route => {
    if (!isAuthenticated && route.label === 'ИЗХОД') return false;
    if (isAuthenticated && route.label === 'ВХОД') return false;
    return true;
  });

  return (
    <nav className={styles["nav-bar-list"]}>
      {filteredRoutes.map((route) => <NavBarItem key={route.id} route={route.route} label={route.label} />)}
    </nav>
  );
};

export default NavBar;
