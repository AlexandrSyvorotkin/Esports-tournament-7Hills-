import React from 'react';
import {Link} from "react-router-dom";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from './TournamentRoadMap.module.scss'

const TournamentRoadMap = ({modalActive, setModalActive, discipline, dates, TournamentImage}) => {
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
                <Button onClick={() => setModalActive(true)}>Положение</Button>
                <Button>Что то еще</Button>
                <Button>И еще что то еще</Button>
            </div>
            {modalActive &&
            <Modal active={modalActive} setActive={setModalActive}>Открыть
                <Button onClick={()=> setModalActive(false)}>Закрыть</Button>
            </Modal>}
        </div>
    );
};

export default TournamentRoadMap;
