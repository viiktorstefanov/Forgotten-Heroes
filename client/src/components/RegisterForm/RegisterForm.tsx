import React from 'react'
import styles from './RegisterForm.module.css';
import { AppDispatch } from "../../state/store";
import { useDispatch } from "react-redux";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { register } from "../../state/auth/authThunks";
import FormRow from "../FormRow/FormRow";
import FormButton from "../FormButton/FormButton";
import { useNavigate } from "react-router-dom";

const registerSchema = Yup.object().shape({
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Невалиден имейл').required("Невалиден имейл"),
    password: Yup.string().min(6, "Минимум 6 символа").required("Невалидна парола"),
    username: Yup.string().required("Попълнете своя прякор")
  });

const RegisterForm: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
        initialValues={{ email: "", username: "", password: "", }}
        validationSchema={registerSchema}
        onSubmit={(credentials) => {
          dispatch(register(credentials));
          navigate('/');
        }}
      >
    {({ errors, touched, isValid }) => (
          <Form className={styles['form-container']}>
            
            <FormRow name="email"  type="email" inputClass="" divErrorClass="error" labelText="ИМЕЙЛ:" errors={errors} touched={touched} />

            <FormRow name="username"  type="text" inputClass="" divErrorClass="error" labelText="ПРЯКОР:" errors={errors} touched={touched} />

            <FormRow name="password"  type="password" inputClass="" divErrorClass="error" labelText="ПАРОЛА:" errors={errors} touched={touched} />

            <FormButton type="submit" text="РЕГИСТРАЦИЯ" buttonClass="reg-btn" disabled={!isValid}/>
          
          </Form>
    )}
    </Formik>
  )
}

export default RegisterForm;
