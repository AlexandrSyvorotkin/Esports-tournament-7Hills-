import React from 'react';
import styles from "./AgreementCheckbox.module.scss";

const AgreementCheckbox = ({type, agreementText, htmlFor, id}) => {
    return (
        <div className={styles.agreement}>
            <input type={type} id={id} required/>
            <label htmlFor={htmlFor}>{agreementText}</label>
        </div>
    );
};

export default AgreementCheckbox;
