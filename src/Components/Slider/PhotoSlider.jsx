import React, {useState} from 'react';
import styles from './PhotoSlider.module.scss'

//TODO: Добавить анимацию на слайдер
//TODO: Добавить чтобы при клике на фото открывалась текующая картинка

const PhotoSlider = ({SliderData, setSliderActive, sliderIndex}) => {


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
                            <div className={styles.arrow}/>
                        </div>
                        <div className={styles.forward} onClick={prevSlide}>
                            <div className={styles.arrow_back}/>
                        </div>
                        {SliderData.map((item,id) => {
                            return (<div className={id === current ? `{styles.slide_active}` : `{styles.slide}`}>
                                {id === current && (<img src={item.img} alt="" className={styles.img}/>)}
                            </div>)
                        })}
                    </section>
                </div>
            </div>

    );
};

export default PhotoSlider;