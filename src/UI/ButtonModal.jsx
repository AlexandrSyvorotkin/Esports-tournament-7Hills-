import React from 'react';
import styles from './ButtonModal.module.scss'

const ButtonModal = ({onClick, children}) => {
    return (
        <button className={styles.button_modal} disabled={false} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonModal;
