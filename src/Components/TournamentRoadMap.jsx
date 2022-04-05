import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from './TournamentRoadMap.module.scss'
import ModalContext from "../context/modal-context";
import ButtonSecondary from "../UI/ButtonSecondary";

const TournamentRoadMap = ({modalActive, setModalActive, discipline, dates, img, dota, cs,go,fifa}) => {

    const context = useContext(ModalContext)


    return (
        <div className={styles.tournament_roadmaps}>
            <div className={styles.roadmap_header}>
                <div className={styles.roadmap_logo}>
                    <img src={img} alt=""/>
                </div>
                <h2>{discipline} Турнир Расписание</h2>
            </div>
            <div className={styles.tournament_roadmap}>
                <div className={styles.qualification}>
                    <p>Квалификации</p>
                    <p className={styles.dates}>{dates.qualification}</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.group_stage}>
                    <p>Групповая стадия</p>
                    <p className={styles.dates}>{dates.groupStage}</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.playoffs}>
                    <p>Плей-офф</p>
                    <p className={styles.dates}>{dates.playoffs}</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.final}>
                    <p>Финал</p>
                    <p className={styles.dates}>{dates.final}</p>
                </div>
            </div>
            <div className={styles.buttons_sections}>
                <Link className={styles.a} to='/Esports-tournament-7Hills-/'><ButtonSecondary>Назад</ButtonSecondary></Link>
                <ButtonSecondary onClick={context.OpenModal}>Положение</ButtonSecondary>
                <ButtonSecondary>Регистрация</ButtonSecondary>
            </div>
            {context.isModalOpened &&
            <Modal active={context.isModalOpened} setActive={setModalActive}>Открыть
                <Button onClick={context.CloseModal}>Закрыть</Button>
            </Modal>}
        </div>
    );
};

export default TournamentRoadMap;
