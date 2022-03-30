import React from 'react';
import styles from './Modal.module.scss'

const Modal = ({active, setActive, children}) => {
    return (
        <div className={styles.modal} onClick={()=> setActive(false)}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
