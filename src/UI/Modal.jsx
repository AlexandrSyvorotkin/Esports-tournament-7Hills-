import React, {useContext} from 'react';
import styles from './Modal.module.scss'
import ModalContext from "../context/modal-context";

const Modal = ({active, setActive, children}) => {
    const context = useContext(ModalContext)

    return (
        <div className={styles.modal} onClick={context.CloseModal}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
