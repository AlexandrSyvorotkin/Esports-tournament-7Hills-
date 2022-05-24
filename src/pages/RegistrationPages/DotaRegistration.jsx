import React from 'react';
import FormRegistration from "../../Components/DIsciplinesForms/FormRegistration";

const DotaRegistration = () => {
    return (
        <div>
            <FormRegistration
                dota={true}
                registrationDisciplineName={'Регистрация Dota 2'}
                url={'https://sheet.best/api/sheets/6ab6ec50-2f81-4d80-b5a2-c874a0bab646'}
            />
        </div>
    );
};

export default DotaRegistration;
