import React, {useState} from 'react';
import styles from "../App.module.scss";
import Information from "../Layout/Information";
import Disciplines from "../Layout/DisciplinesSection/Disciplines";
import HamburgerMenu from "../Components/HamburgerMenu";
import Menu from "../Components/Menu";

const MainPage = () => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={styles.app}>
                    <Information/>
                    <Disciplines/>
                    <HamburgerMenu setMenuActive={setMenuActive}/>
                    <Menu menuActive={menuActive} setMenuActive={setMenuActive}/>
        </div>
    );
};

export default MainPage;
