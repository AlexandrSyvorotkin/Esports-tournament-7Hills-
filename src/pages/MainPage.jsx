import React from 'react';
import styles from "../App.module.scss";
import Information from "../Layout/Information";
import Disciplines from "../Layout/DisciplinesSection/Disciplines";
import HamburgerMenu from "../Components/HamburgerMenu";
import Menu from "../Components/Menu";
import Header from "../Layout/Header";

const MainPage = () => {

    const header = 'header'
    const item = 'items'

    return (
        <div className={styles.app}>
                    <Information/>
                    <Disciplines/>
                    <HamburgerMenu/>
        </div>
    );
};

export default MainPage;
