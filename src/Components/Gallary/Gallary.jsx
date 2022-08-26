import React from 'react';
import styles from "./Gallary.module.scss";
import {Link} from "react-router-dom";
import PhotoSlider from "../Slider/PhotoSlider";
import ButtonModal from "../../UI/ButtonModal";

const Gallary = ({photoes}) => {
    return (
        <div className={styles.gallary}>
            <div className={styles.gallary_header}>
                <Link to='/photosgalary'><ButtonModal>Назад</ButtonModal></Link>
            </div>
            <div className={styles.photos}>
                {photoes.map((item, index) =>
                    <div className={styles.photos_item}>
                        <img id={item.id} src={item.img} alt=""/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallary;