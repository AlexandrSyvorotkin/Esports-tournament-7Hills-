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
                        <Link to='/Esports-tournament-7Hills-'><MenuButton>Главная</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/Esports-tournament-7Hills-/contacts'><MenuButton>Контакты</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/Esports-tournament-7Hills-/photosgalary'><MenuButton>Галерея</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/Esports-tournament-7Hills-/faq'><MenuButton>FAQ</MenuButton></Link>
                    </li>
                    <li>
                        <Link to='/Esports-tournament-7Hills-/aboutus'><MenuButton>О проекте</MenuButton></Link>
                    </li>
                    <li>
                        <Link to=''><MenuButton>Партнеры</MenuButton></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
