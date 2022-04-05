import React from 'react';
import styles from './MenuButton.module.scss'

//Дописать кнопку под scss

const MenuButton = ({onClick, children}) => {
    return (
        <a className={styles.menu_button} onClick={onClick} href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </a>
    );
};

export default MenuButton;
