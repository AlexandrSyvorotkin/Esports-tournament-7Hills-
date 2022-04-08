import React from 'react';
import styles from './ButtonSecondary.module.scss'

const ButtonSecondary = ({children, onClick}) => {
    return (
            <div className={styles.button_2} onClick={onClick}>
                {children}
            </div>


    );
};

export default ButtonSecondary;
