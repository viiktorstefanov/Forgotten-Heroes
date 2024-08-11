import React from "react";
import styles from './NotMemberContainer.module.css';
import { Link } from "react-router-dom";
import { notMember } from "../../constants/notMember";


const NotMemberContainer: React.FC = () => {

    return (
        <div className={styles['not-member-container']}>
            <h2>{notMember.header}</h2>
            <Link className={styles['reg-btn']} to={'/register'}>
                {notMember.buttonText}
            </Link>
        </div>
    )
};

export default NotMemberContainer;