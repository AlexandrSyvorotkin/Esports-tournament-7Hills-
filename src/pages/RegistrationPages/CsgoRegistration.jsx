import React from 'react';
import FormRegistration from "../../Components/DIsciplinesForms/FormRegistration";
import styles from './CsgoRegistration.module.scss'

const CsgoRegistration = () => {
    return (
        <div className={styles.csgo_registration}>
            <FormRegistration
                registrationDisciplineName={'Регистрация CSGO'}
                cs={true}
                url={'https://sheet.best/api/sheets/c97ec2b2-4696-4399-85dd-fbb715ebb79d'}
            />
        </div>
    );
};

export default CsgoRegistration;
