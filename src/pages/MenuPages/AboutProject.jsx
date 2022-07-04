import React from 'react';
import styles from './AboutProject.module.scss'
import {Link} from "react-router-dom";
import ButtonSecondary from "../../UI/ButtonSecondary";
import VK from '../../Assets/vk.png'
import ButtonModal from "../../UI/ButtonModal";
import HamburgerMenu from "../../Components/HamburgerMenu";
import Menu from "../../Components/Menu";

const AboutProject = () => {
    return (
        <div className={styles.about_us_information}>
            <h2>О проекте</h2>
            <div className={styles.about_message}>
                <div className={styles.about_text}>
                    <p className={styles.tournament_text}>Киберспортивный турнир <span className={styles.seven_hills_tournament}>«Семь Холмов»</span> - это продолжение ежегодного турнира по киберспорту среди работающей и студенческой молодежи города Москвы, проводимого Московской Федерацией профсоюзов.
                        Свое начало данный турнир берет в 2020-ом году.Киберспортивный турнир «Семь Холмов» - это продолжение ежегодного турнира по киберспорту среди работающей и студенческой молодежи города Москвы, проводимого Московской Федерацией профсоюзов.
                        Свое начало данный турнир берет в 2020-ом году.</p>
                    <p className={styles.tournament_text}>Первый турнир прошел в период сложной эпидемиологической обстановки, именно поэтому было принято решение о проведении турнира в формате «online». В первом турнире приняло участие более 1500 представителей молодежи Москвы.</p>
                    <div className={styles.winners_names}>
                        <p className={styles.winners}>Победители первого турнира:</p>
                        <ul>
                            <li>- DOTA 2 - Команда из Российского Государственного Аграрного Университета - МСХА имени К.А. Тимирязева</li>
                            <li>- Counter-strike: Global Offensive - команда Exergium (МЭИ)</li>
                            <li>- FIFA - Зайцев Илья, студент МАДИ</li>
                        </ul>
                    </div>
                    <p className={styles.tournament_text}>
                        В 2021 году турнир прошел уже в смешанной формате. Отборочные матчи прошли дистанционно, но уже в финале команды встретились на площадке киберспортивного клуба. Кроме очного финала второй турнир отличался и наличием призового фонда. Игроки и команды в финале разыграли призовой фонд в размере 90 000 рублей, который был сформирован благодаря партнёрам проекта. Суммарно 2021 году в проекте приняло участие более 2000 человек.
                    </p>
                    <p className={styles.winners}>Победители второго турнира:</p>
                    <div className={styles.winners_names}>
                        <ul>
                            <li>- DOTA 2  - Команда Rive - сборная университетов Москвы</li>
                            <li>- Counter-Strike:Global Offensive - AIMl0CK - команда из университета РЭУ им. Плеханова</li>
                            <li>- FIFA - Петр Южаков - студент МЭИ</li>
                        </ul>
                    </div>
                    <p className={styles.tournament_text}>В 2021 году проект был подан в конкурс грантов Мэра Москвы «Душевная Москва», в результате которого получил поддержку на реализацию в 2022 году и был назван «Семь Холмов»</p>
                </div>
                <div className={styles.about_project_image}>
                    <img src={VK} alt=""/>
                </div>
            </div>
            <Link to='/'><ButtonModal>Назад</ButtonModal></Link>
            <HamburgerMenu/>
            <Menu/>
        </div>
    );
};

export default AboutProject;
