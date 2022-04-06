import React from 'react';
import styles from './ButtonSecondary.module.scss'

const ButtonSecondary = ({children, onClick}) => {
    return (
            <a className={styles.button_2} onClick={onClick}>
                {children}
            </a>


    );
};

export default ButtonSecondary;
