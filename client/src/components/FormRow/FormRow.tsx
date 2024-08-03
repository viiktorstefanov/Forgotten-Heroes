import React from "react";
import styles from './FormRow.module.css';

import { Field } from "formik";

type FormRowProps = {
    errors: { [key: string]: string },
    touched: { [key: string]: boolean },
    labelText: string,
    name: string,
    type: string,
    inputClass: string,
    divErrorClass: string,
}


const FormRow: React.FC<FormRowProps> = ( { errors, touched, labelText, name, type, inputClass, divErrorClass } ) => {

    return (
        <label htmlFor={name} className={styles['label']} >
            <div className={styles['row-wrapper']}>
              <span className={styles['label-text']}>{labelText}</span>
              <Field name={name} type={type} className={`${styles['email-input']} ${styles['password-input']} ${inputClass}`} />
            </div>
            {errors[`${name}`] && touched[`${name}`] ? <div className={styles[`${divErrorClass}`]}>{errors[`${name}`]}</div> : null}
        </label>
    )
};

export default FormRow;