import React from 'react';
import styles from "../App.module.scss";
import Information from "../Layout/Information";
import Disciplines from "../Layout/DisciplinesSection/Disciplines";
import HamburgerMenu from "../Components/HamburgerMenu";

const MainPage = () => {



    return (
        <div className={styles.app}>
                    <Information/>
                    <Disciplines/>
                    <HamburgerMenu/>
        </div>
    );
};

export default MainPage;
