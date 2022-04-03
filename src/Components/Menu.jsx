import React from 'react';
import styles from './Menu.module.scss'

const Menu = ({setMenuActive, menuActive}) => {


    return (
        <div className={`${menuActive ? styles.menu_active : styles.menu}`}>
            <div className={styles.blur} onClick={() => setMenuActive(false)}/>
            <div className={styles.menu_content}>
                <ul>
                    <li><a href="">Главная</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">Галерея</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">О проекте</a></li>
                    <li><a href="">Партнеры</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
