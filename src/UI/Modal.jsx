import React from 'react';
import styles from './Modal.module.scss'

const Modal = ({children, visible, setVisible}) => {

    const modalClasses = [styles.modal]
    if (visible) {
        modalClasses.push(styles.active)
    }

    return (
        <div className={modalClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className={styles.modal_content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
