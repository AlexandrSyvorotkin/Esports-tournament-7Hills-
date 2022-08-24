import React from 'react';
import styles from "./Gallary.module.scss";
import {Link} from "react-router-dom";

const Gallary = ({photoes}) => {
    return (
        <>
            <Link to='/photosgalary'>Назад</Link>
            <div className={styles.photos}>
                {photoes.map((item, index) =>
                    <div className={styles.photos_item}>
                        <img id={item.id} src={item.img} alt=""/>
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallary;