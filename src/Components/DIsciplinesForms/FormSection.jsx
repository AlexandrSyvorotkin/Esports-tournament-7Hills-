import React from 'react';
import styles from './FormSection.module.scss';

//TODO: Доработать обработчик ошибок

const FormSection = ({errors, placeholder, type, formLabel, params}) => {
    return (
        <div className={styles.form_section}>
            <label>{formLabel}</label>
            <input
                {...params}
                type={type}
                placeholder={placeholder}
            />
            <div className={styles.form_error}>
                {/*{errors?.name && <p>{errors?.name?.message || 'Error'}</p>}*/}
            </div>
        </div>
    );
};

export default FormSection;
