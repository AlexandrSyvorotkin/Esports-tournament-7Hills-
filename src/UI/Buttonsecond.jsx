import React from 'react';
import styles from './ButtonTest.module.css'

const Buttonsecond = ({children, onClick}) => {
    return (
            <a className={styles.button_2} onClick={onClick}>
                {children}
            </a>


    );
};

export default Buttonsecond;
