import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import NotMemberContainer from "../NotMemberContainer/NotMemberContainer";

import styles from './Login.module.css';

const Login: React.FC = () => {
  return (
    <section className={styles['login-container']}>
      <LoginForm />
      <NotMemberContainer />
    </section>
  );
};

export default Login;
