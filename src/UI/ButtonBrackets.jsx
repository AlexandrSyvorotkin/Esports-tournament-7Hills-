import React from 'react';
import styles from './ButtonBrackets.module.scss'

const ButtonBrackets = ({children}) => {
    return (
        <div className={styles.bracket_button}>
            <span>{children}</span>
        </div>
    );
};

export default ButtonBrackets;
