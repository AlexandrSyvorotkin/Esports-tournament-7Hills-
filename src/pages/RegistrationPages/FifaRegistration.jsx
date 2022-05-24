import React from 'react';
import FormRegistration from "../../Components/DIsciplinesForms/FormRegistration";
import styles from './FifaRegistration.module.scss'

const FifaRegistration = () => {
    return (
        <div className={styles.fifa_registration}>
            <FormRegistration
                fifa={true}
                registrationDisciplineName={'Регистрация Fifa'}
                url={'https://sheet.best/api/sheets/a6db5f73-4434-454b-bd22-52d2ccc1025f'}
            />
        </div>
    );
};

export default FifaRegistration;
