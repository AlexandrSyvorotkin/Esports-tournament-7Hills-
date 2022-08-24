import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import styles from './PhotoGalary.module.scss'
import PhotoSlider from "../../../Components/Slider/PhotoSlider";

const PhotoGalary = () => {


    return (
        <div className={styles.gallary}>
            {/*<div className={styles.gallary_item}>*/}
            {/*    <Link to='photos2020'>Фото 2020</Link>*/}
            {/*</div>*/}
            {/*<div className={styles.gallary_item}>*/}
            {/*    <Link to='photos2021'>Фото 2021</Link>*/}
            {/*</div>*/}
            <PhotoSlider/>
        </div>
    );
};

export default PhotoGalary;
