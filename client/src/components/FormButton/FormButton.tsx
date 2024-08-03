import React from 'react';
import styles from './FormButton.module.css';

type FormButtonProps = {
    text: string,
    type: 'button' | 'submit' | 'reset',
    buttonClass: string,
    disabled: true | false
}

const FormButton: React.FC<FormButtonProps> = ({ text, type, buttonClass, disabled }) => {
    return (
        <button type={type} className={`${styles.btn} ${buttonClass}`} disabled={disabled}>
            {text}
        </button>
    )
};

export default FormButton;