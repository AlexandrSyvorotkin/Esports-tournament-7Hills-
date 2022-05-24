import React from 'react';
import FormRegistration from "../../Components/DIsciplinesForms/FormRegistration";
import styles from './ValorantRegistration.module.scss'

const ValorantRegistration = () => {
    return (
        <div className={styles.valorant_registration}>
            <FormRegistration
                valorant={true}
                url={'https://sheet.best/api/sheets/9db726be-e586-4965-aeb6-55f5a35426ea'}
                registrationDisciplineName={'Регистрация Valorant'}
            />
        </div>
    );
};

export default ValorantRegistration;
