import React from "react";
import styles from './Register.module.css';
import RegisterForm from "../RegisterForm/RegisterForm";

const Register: React.FC = () => {
 
  return (
    <section className={styles['register-container']}>
        <RegisterForm />
    </section>
  );
};

export default Register;
