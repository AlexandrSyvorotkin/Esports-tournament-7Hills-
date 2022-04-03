import React from 'react';
import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.blur}/>
            <div className={styles.menu_content}>
                <a href="">Контакты</a>
                <a href="">Галерея</a>
                <a href="">FAQ</a>
                <a href="">О проекте</a>
                <a href="">Партнеры</a>
            </div>
        </div>
    );
};

export default Menu;
