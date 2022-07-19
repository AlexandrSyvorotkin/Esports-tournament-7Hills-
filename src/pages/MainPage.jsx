import React from 'react';
import styles from "../App.module.scss";
import Information from "../Layout/Information";
import Disciplines from "../Layout/DisciplinesSection/Disciplines";
import HamburgerMenu from "../Components/Menus/HamburgerMenu/HamburgerMenu";
import Menu from "../Components/Menus/SideMenu/Menu";

const MainPage = () => {

    return (
        <div className={styles.app}>
                    <Information/>
                    <Disciplines/>
                    <HamburgerMenu/>
                    <Menu/>
        </div>
    );
};

export default MainPage;
