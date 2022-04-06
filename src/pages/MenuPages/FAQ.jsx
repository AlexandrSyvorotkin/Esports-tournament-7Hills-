import React, {useState} from 'react';
import styles from './FAQ.module.scss'
import {Link} from "react-router-dom";
import ButtonModal from "../../UI/ButtonModal";

const Faq = () => {

    const data = [
        {
            question: 'Где я могу посмотреть правила турнира?',
            answer: 'Правила турнира и основные игровые моменты опубликованы в регламенте который добавлен в анонс турнира.'
        },
        {
            question: 'Какие игроки могут принять участие в турнире?',
            answer: 'Игроками лиги могут является студенты вузов'
        },
        {
            question: 'Как распределяются призовые?',
            answer: '1 место - 250 000 рублей 2 место - 100 000 рублей 3 место - 50 000 рублей 4 место - 30 000 рублей 5 – 5-8 место - по 15 000 рублей'
        },
        {
            question: 'Как зарегистрировать на турнир?',
            answer: 'Для регистрации на турнир вам неоходимо, выбрать на главном экране, в секции дисциплин кнопку регистрации'
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
                <Link to='/Esports-tournament-7Hills-/'><ButtonModal>Назад</ButtonModal></Link>
            </div>
        </div>
    );
};

export default Faq;
