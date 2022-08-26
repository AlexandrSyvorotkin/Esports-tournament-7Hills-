import React, {useState} from 'react';
import styles from "./Gallary.module.scss";
import {Link} from "react-router-dom";
import PhotoSlider from "../Slider/PhotoSlider";
import ButtonModal from "../../UI/ButtonModal";
import Menu from "../Menus/SideMenu/Menu";
import HamburgerMenu from "../Menus/HamburgerMenu/HamburgerMenu";
import SliderData from '../../data-base/photoes-data/photoes_2020'

//TODO: Разобраться с меню и position fixed

const Gallary = ({photoes}) => {

    const [sliderActive, setSliderActive] = useState(false)

    return (
        <div className={styles.gallary}>
            <div className={styles.gallary_header}>
                <Link to='/photosgalary'><ButtonModal>Назад</ButtonModal></Link>
            </div>
            <div className={styles.photos}>
                {photoes.map((item, index) =>
                    <div className={styles.photos_item} onClick={() => setSliderActive(true)}>
                        <img id={item.id} src={item.img} alt=""/>
                    </div>
                )}
            </div>
            {sliderActive && <PhotoSlider SliderData={SliderData} setSliderActive={setSliderActive}/>}
            <Menu/>
            <HamburgerMenu/>
        </div>
    );
};

export default Gallary;