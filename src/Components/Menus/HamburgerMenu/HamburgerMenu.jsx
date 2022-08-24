import React, {useContext} from 'react';
import styles from './HamburgerMenu.module.scss'
import SideMenuContext from "../../../context/modal-context";

//TODO: ПОдумать над позиционированием меню

const HamburgerMenu = () => {

    const ctx = useContext(SideMenuContext)

    return (
        <div className={styles.hamburger_menu} onClick={ctx.OpenSideMenu}>
            <span/>
        </div>

    );
}

export default HamburgerMenu;
