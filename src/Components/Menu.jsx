import React from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";

const Menu = ({setMenuActive, menuActive}) => {


    return (
        <div className={`${menuActive ? styles.menu_active : styles.menu}`}>
            <div className={styles.blur} onClick={() => setMenuActive(false)}/>
            <div className={styles.menu_content}>
                <ul>
                    <li><Link to='/Esports-tournament-7Hills-'>Главная</Link></li>
                    <li><Link to='/Esports-tournament-7Hills-/contacts'>Контакты</Link></li>
                    <li><Link to='/Esports-tournament-7Hills-/photosgalary'>Галерея</Link></li>
                    <li><Link to='/Esports-tournament-7Hills-/faq'>FAQ</Link></li>
                    <li><Link to='/Esports-tournament-7Hills-/aboutus'>О проекте</Link></li>
                    <li><Link to=''>Партнеры</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
