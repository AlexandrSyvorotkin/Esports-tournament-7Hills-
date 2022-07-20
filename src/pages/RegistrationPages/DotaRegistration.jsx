import React from 'react';
import FormRegistration from "../../Components/DIsciplinesForms/FormRegistration";
import styles from './DotaRegistration.module.scss'
import dota from '../../Assets/Backgrounds/dota_background2.jpg'
import HamburgerMenu from "../../Components/Menus/HamburgerMenu/HamburgerMenu";
import Menu from "../../Components/Menus/SideMenu/Menu";


const DotaRegistration = () => {
    return (
        <>
            <FormRegistration
                dota={true}
                registrationDisciplineName='Регистрация Dota 2'
                url='https://sheet.best/api/sheets/6ab6ec50-2f81-4d80-b5a2-c874a0bab646'
                backgroundImage={dota}
            />
            <HamburgerMenu/>
            <Menu/>
        </>
    );
};

export default DotaRegistration;
