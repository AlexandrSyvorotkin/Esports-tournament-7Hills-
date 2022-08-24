import React, {useState} from 'react';
import styles from './PhotoSlider.module.scss'
import SliderData from '../../data-base/photoes-data/photoes_2020'

const PhotoSlider = () => {

    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    return (
        <div>
            {SliderData.map(item => {
                return <img src={item.img} alt=""/>
            })}
        </div>
    );
};

export default PhotoSlider;