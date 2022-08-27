import React from 'react';
import styles from './PhotoGalary.module.scss'
import PhotoSlider from "../../../Components/Slider/PhotoSlider";
import PhotoGallaryItem from "../../../Components/Gallary/PhotoGallaryItem/PhotoGallaryItem";
import Gallary20 from '../../../Assets/img-for-gallaries/2020.jpg'
import Gallary21 from '../../../Assets/img-for-gallaries/2021.jpg'
import Button from "../../../UI/Button";
import MenuButton from "../../../UI/MenuButton";
import ButtonModal from "../../../UI/ButtonModal";
import Menu from "../../../Components/Menus/SideMenu/Menu";
import HamburgerMenu from "../../../Components/Menus/HamburgerMenu/HamburgerMenu";
import {Link} from "react-router-dom";

const PhotoGalary = () => {

    return (
        <>
            <div className={styles.gallary}>
                    <span>Фотоотчеты наших мероприятий</span>
                <div className={styles.gallary_content}>
                    <PhotoGallaryItem path='photos2020' img={Gallary20} gallay_year='Tурнир 2020' />
                    <PhotoGallaryItem path='photos2021' img={Gallary21} gallay_year='Tурнир 2021' />
                </div>
                <div>
                    <Link to='/'><ButtonModal>Назад</ButtonModal></Link>
                </div>
            </div>
            <Menu/>
            <HamburgerMenu/>
        </>
    );
};

export default PhotoGalary;
