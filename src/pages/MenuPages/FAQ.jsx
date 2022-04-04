import React, {useState} from 'react';
import styles from './FAQ.module.scss'
import Button from "../../UI/Button";
import {Link} from "react-router-dom";

const Faq = () => {

    const [firstAnswer, getFirstAnswer] = useState(false)
    const [secondAnswer, getSecondAnswer] = useState(false)
    const [thirdAnswer, getThirdAnswer] = useState(false)
    const [fouthAnswer, getFouthAnswer] = useState(false)

    return (
        <div className={styles.faq}>
            <div className={styles.faq_section}>
                <div className={styles.faq_header}>
                    <div className={styles.faq_name}>
                        FAQ
                    </div>
                    <Link to='/Esports-tournament-7Hills-/'><Button>Назад</Button></Link>
                </div>
                <div className={styles.questions}>
                    <div className={styles.single_question} onClick={()=> getFirstAnswer(!firstAnswer)}>
                        <p>1) Где я могу посмотреть правила турнира?</p>
                    </div>
                    <div className={`${firstAnswer ? styles.single_answer_active : styles.single_answer}`}>
                        <p>Правила турнира и основные игровые моменты опубликованы в регламенте который добавлен в анонс турнира.</p>
                    </div>
                    <div className={styles.single_question} onClick={()=> getSecondAnswer(!secondAnswer)}>
                        <p>2) Какие игроки могут принять участие в турнире?</p>
                    </div>
                    <div className={`${secondAnswer ? styles.single_answer_active : styles.single_answer}`}>
                        <p>Игроками лиги могут является студенты вузов</p>
                    </div>
                    <div className={styles.single_question} onClick={()=> getThirdAnswer(!thirdAnswer)}>
                        <p>3) Как распределяются призовые?</p>
                    </div>
                    <div className={`${thirdAnswer ? styles.single_answer_active : styles.single_answer}`}>
                        <p>1 место - 250 000 рублей 2 место - 100 000 рублей 3 место - 50 000 рублей 4 место - 30 000 рублей 5 – 5-8 место - по 15 000 рублей</p>
                    </div>
                    <div className={styles.single_question} onClick={()=> getFouthAnswer(!fouthAnswer)}>
                        <p>4) Как зарегистрировать на турнир?</p>
                    </div>
                    <div className={`${fouthAnswer ? styles.single_answer_active : styles.single_answer}`}>
                        <p>Для того, чтобы зарегистрироваться на турнир, вам необходимо заполнить заявку на участие в турнире на сайте, указав актуальный E-mail адрес. Далее, в течение нескольких дней вам придёт письмо на почту с подтверждением, где будет ссылка на квалификацию вашего клуба на сайте Faceit, куда вам необходимо вступить командой.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
