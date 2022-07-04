import React from 'react';
import styles from './MenuButton.module.scss'

//Дописать кнопку под scss

const MenuButton = ({onClick, children}) => {
    return (
        <div className={styles.menu_button} onClick={onClick}>
            <span/>
            <span/>
            <span/>
            <span/>
            {children}
        </div>
    );
};

export default MenuButton;
