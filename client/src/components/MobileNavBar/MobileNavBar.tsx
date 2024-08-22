import React, { useState } from 'react';
import styles from './MobileNavBar.module.css';

import { app } from "../../constants/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { routes } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import NavBarItem from '../NavBarItem/NavBarItem';

const MobileNavBar: React.FC = () => {

    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
      );

    const [isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const filteredRoutes = routes.filter(route => {
        if (!isAuthenticated && route.label === 'ИЗХОД') return false;
        if (isAuthenticated && route.label === 'ВХОД') return false;
        return true;
      });

  return (
    <div className={styles['mobile-nav']}>
        <div className={styles['menu-container']}>
            <div onClick={toggleMenu} className={styles['menu-button']}><FontAwesomeIcon icon={faBars} /></div>
            <div className={`${styles['menu-content']} ${isMenuOpen ? styles['show'] : null}`}>
                <ul>
                    {filteredRoutes.map((route) => <li className={styles['nav-item']} key={route.id}><NavBarItem route={route.route} label={route.label}/></li>)}
                </ul>
            </div>
        </div>
        <div className={styles['logo']}>
            <h1>{app.header}</h1>
        </div>
    </div>
  )
}

export default MobileNavBar;
