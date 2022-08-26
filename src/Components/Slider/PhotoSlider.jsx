import React, {useState} from 'react';
import styles from './PhotoSlider.module.scss'
import SliderData from '../../data-base/photoes-data/photoes_2020'

//TODO: Добавить анимацию на слайдер

const PhotoSlider = () => {

    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }


    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    return (
            <section className={styles.photo_slider}>
                <div className={styles.back} onClick={nextSlide}>Вперед</div>
                <div className={styles.forward} onClick={prevSlide}>Назад</div>
                {SliderData.map((item,index) => {
                    return (<div className={index === current ? `{styles.slide_active}` : `{styles.slide}`}>
                        {index === current && (<img src={item.img} alt="" className={styles.img}/>)}
                    </div>)
                })}
            </section>
    );
};

export default PhotoSlider;