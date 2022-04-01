import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from './TournamentRoadMap.module.scss'
import ModalContext from "../context/modal-context";

const TournamentRoadMap = ({modalActive, setModalActive, discipline, dates}) => {

    const context = useContext(ModalContext)

    return (
        <div className={styles.dota}>
            <h2>{discipline} Tournament RoadMap</h2>
            <div className={styles.tournament_roadmap}>
                <div className={styles.qualification}>
                    <p>Квалификации</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.group_stage}>
                    <p>Групповая стадия</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.playoffs}>
                    <p>Плей-офф</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.final}>
                    <p>Финал</p>
                </div>
            </div>
            <div className={styles.tournament_dates}>
                <div>{dates.qualification}</div>
                <div>{dates.groupStage}</div>
                <div>{dates.playoffs}</div>
                <div>{dates.final}</div>
            </div>
            <div className={styles.buttons_sections}>
                <Link to='/'><Button>Назад</Button></Link>
                <Button onClick={context.OpenModal}>Положение</Button>
                <Button>Что то еще</Button>
                <Button>И еще что то еще</Button>
            </div>
            {context.isModalOpened &&
            <Modal active={context.isModalOpened} setActive={setModalActive}>Открыть
                <Button onClick={context.CloseModal}>Закрыть</Button>
            </Modal>}
        </div>
    );
};

export default TournamentRoadMap;
