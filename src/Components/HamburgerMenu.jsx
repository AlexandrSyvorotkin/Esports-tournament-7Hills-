import React, {useContext} from 'react';
import styles from './HamburgerMenu.module.scss'
import SideMenuContext from "../context/modal-context";

const HamburgerMenu = () => {

    const ctx = useContext(SideMenuContext)

    return (
        <div className={styles.hamburger_menu} onClick={ctx.OpenSideMenu}>
            <span/>
        </div>

    );
}

export default HamburgerMenu;
