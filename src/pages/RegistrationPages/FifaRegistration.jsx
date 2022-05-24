import React from 'react';
import FormRegistration from "../../Components/DIsciplinesForms/FormRegistration";

const FifaRegistration = () => {
    return (
        <div>
            <FormRegistration
                fifa={true}
                registrationDisciplineName={'Регистрация Fifa'}
                url={'https://sheet.best/api/sheets/a6db5f73-4434-454b-bd22-52d2ccc1025f'}
            />
        </div>
    );
};

export default FifaRegistration;
