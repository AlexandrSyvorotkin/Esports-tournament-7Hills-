import React from 'react';
import styles from './NotFound.module.scss'
import {Link} from "react-router-dom";
import ButtonModal from "../UI/ButtonModal";

const NotFound = () => {
    return (
        <div className={styles.not_found}>
            <div>
                Упс произошла ошибка!
            </div>
            <Link to='/'><ButtonModal>Главная</ButtonModal></Link>
        </div>

    );
};

export default NotFound;
