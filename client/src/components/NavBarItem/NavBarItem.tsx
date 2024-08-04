import React from 'react';
import styles from './NavBarItem.module.css';
import { Link } from "react-router-dom";

type ItemProps = {
    route: string,
    label: string,
}

const NavBarItem: React.FC<ItemProps> = ({ route, label}) => {
  return (
    <Link className={styles["nav-bar-item"]} to={route}>
        {label}
    </Link>
  )
}

export default NavBarItem;
