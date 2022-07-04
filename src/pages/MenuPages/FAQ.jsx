import React, {useState} from 'react';
import styles from './FAQ.module.scss'
import {Link} from "react-router-dom";
import ButtonModal from "../../UI/ButtonModal";
import HamburgerMenu from "../../Components/HamburgerMenu";
import Menu from "../../Components/Menu";

const Faq = () => {

    const data = [
        {
            question: 'Где я могу посмотреть правила турнира?',
            answer: 'Правила турнира и регламент проведения вы можете посмотреть в положении, которое находится в разделе соответствующей игры'
        },
        {
            question: 'Какие игроки могут принять участие в турнире?',
            answer: 'В турнире участвует работающая и студенческая молодежь города Москвы в возрасте от 18 до 35 лет включительно. Недопускается участие профессиональных игроков и команд. '
        },
        {
            question: 'Как распределяются призовые?',
            answer: 'Призовой фонд турнира сформирован за счет партнеров проекта. Призовой фонд составляет 200 000 рублей. Денежный приз получает команда, занявшая первое место. Приз на победителю в командной дисциплине - 62 500 рублей. Индивидуальная дисциплина - 12 500 рублей'
        },
        {
            question: 'Как зарегистрировать на турнир?',
            answer: 'Регистрация осуществляется в разделе соотвествующей дисциплины. В командных дисциплинах регистрируется ТОЛЬКО капитан команды.'
        },
    ]

    const [clicked, setClicked] = useState(false)

    const toggleClick = (index) => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <div className={styles.faq_main}>
            <div className={styles.faq_section_header}>
                <p>FAQ</p>
            </div>
            <div className={styles.faq_section}>
                {data.map((item, index) => {
                    return (
                        <>
                            <div className={styles.faq_section_wrapper}
                                 onClick={() => toggleClick(index)}
                                 key={index}
                            >
                                <h2>{item.question}</h2>
                            </div>
                            {clicked === index ? (
                                    <div className={styles.dropdown}>
                                        <p>{item.answer}</p>
                                    </div>)
                                : null}
                        </>
                    )
                })}
            </div>
            <div className={styles.faq_footer}>
                <Link to='/'><ButtonModal>Назад</ButtonModal></Link>
            </div>
            <HamburgerMenu/>
            <Menu/>
        </div>
    );
};

export default Faq;
