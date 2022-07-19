import React, {useContext} from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";
import MenuButton from "../../../UI/MenuButton";
import SideMenuContext from "../../../context/modal-context";

const Menu = () => {
    const ctx = useContext(SideMenuContext)

    return (
        <div className={`${ctx.isSideMenuOpened ? styles.menu_active : styles.menu}`}>
            <div className={styles.blur} onClick={ctx.CloseSideMenu}/>
            <div className={styles.menu_content}>
                <ul>
                    <li>
                        <Link to='/'><MenuButton onClick={ctx.CloseSideMenu}>Главная</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/contacts'><MenuButton onClick={ctx.CloseSideMenu}>Контакты</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/photosgalary'><MenuButton>Галерея</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/aboutus'><MenuButton onClick={ctx.CloseSideMenu}>О проекте</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/registration'><MenuButton onClick={ctx.CloseSideMenu}>Регистрация</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/faq' ><MenuButton onClick={ctx.CloseSideMenu}>FAQ</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/positions'><MenuButton>Регламенты</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/tournament-brackets'><MenuButton>Турнирные сетки</MenuButton></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
