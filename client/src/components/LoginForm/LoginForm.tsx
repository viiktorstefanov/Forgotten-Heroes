import React, { useEffect } from "react";
import styles from './LoginForm.module.css';
import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { login } from "../../state/auth/authThunks";
import FormRow from "../FormRow/FormRow";
import FormButton from "../FormButton/FormButton";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
    email: Yup.string().email("Невалиден имейл").required("Невалиден имейл"),
    password: Yup.string().min(6, "Минимум 6 символа").required("Невалидна парола"),
  });

const LoginForm: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    useEffect(() => {
      if (isAuthenticated) {
        navigate('/game');
      }
    }, [isAuthenticated]);

    return (
        <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(credentials) => {
          dispatch(login(credentials));
        }}
      >
         {({ errors, touched, isValid }) => (
          <Form className={styles['form-container']}>
            
            <FormRow name="email"  type="email" inputClass="" divErrorClass="error" labelText="ИМЕЙЛ:" errors={errors} touched={touched} />

            <FormRow name="password"  type="password" inputClass="" divErrorClass="error" labelText="ПАРОЛА:" errors={errors} touched={touched} />

            <FormButton type="submit" text="ВХОД" buttonClass="login-btn" disabled={!isValid}/>
          
          </Form>
         )}
        </Formik>
    )
};

export default LoginForm;