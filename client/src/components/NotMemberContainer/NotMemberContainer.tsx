import React from "react";
import styles from './NotMemberContainer.module.css';
import { Link } from "react-router-dom";


const NotMemberContainer: React.FC = () => {

    return (
        <div className={styles['not-member-container']}>
            <h2>НЯМАШ ПРОФИЛ?</h2>
            <Link className={styles['reg-btn']} to={'/register'}>
                СЪЗДАЙ
            </Link>
        </div>
    )
};

export default NotMemberContainer;