import React, {useState} from 'react';
import styles from './PhotoSlider.module.scss'

//TODO: Добавить анимацию на слайдер

const PhotoSlider = ({SliderData, setSliderActive}) => {

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
            <div className={styles.slider} onClick={()=> setSliderActive(false)}>
                <div className={styles.slider_content} onClick={(e) => e.stopPropagation()}>
                    <section className={styles.photo_slider}>
                        <div className={styles.back} onClick={nextSlide}>
                            <p><i className={styles.arrow_right}></i></p>
                        </div>
                        <div className={styles.forward} onClick={prevSlide}>Назад</div>
                        {SliderData.map((item,index) => {
                            return (<div className={index === current ? `{styles.slide_active}` : `{styles.slide}`}>
                                {index === current && (<img src={item.img} alt="" className={styles.img}/>)}
                            </div>)
                        })}
                    </section>
                </div>
            </div>

    );
};

export default PhotoSlider;