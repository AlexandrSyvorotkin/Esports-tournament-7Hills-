import React from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";
import MenuButton from '../UI/MenuButton';

const Menu = ({setMenuActive, menuActive}) => {


    return (
        <div className={`${menuActive ? styles.menu_active : styles.menu}`}>
            <div className={styles.blur} onClick={() => setMenuActive(false)}/>
            <div className={styles.menu_content}>
                <ul>
                    <li>
                        <MenuButton onClick={() => setMenuActive(false)}>Главная</MenuButton>
                    </li>
                    <li>
                        <Link to='/contacts'><MenuButton>Контакты</MenuButton></Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to='/photosgalary'><MenuButton>Галерея</MenuButton></Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to='/aboutus'><MenuButton>О проекте</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/registration'><MenuButton>Регистрация</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/faq'><MenuButton>FAQ</MenuButton></Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to='/positions'><MenuButton>Регламенты</MenuButton></Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to='/tournament-brackets'><MenuButton>Турнирные сетки</MenuButton></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
