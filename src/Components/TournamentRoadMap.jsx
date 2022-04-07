import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Modal from "../UI/Modal";
import styles from './TournamentRoadMap.module.scss'
import ModalContext from "../context/modal-context";
import ButtonSecondary from "../UI/ButtonSecondary";
import ButtonModal from "../UI/ButtonModal";

const TournamentRoadMap = ({modalActive, setModalActive, discipline, dates, img, registrationPath}) => {

    const context = useContext(ModalContext)

    return (
        <div className={styles.tournament_roadmaps}>
            <div className={styles.tournament_roadmap}>
                <div className={styles.stage} onClick={context.OpenModal}>
                    <span>Квалификации</span>
                    <p className={styles.dates}>{dates.qualification}</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.stage} onClick={context.OpenModal}>
                    <span>Групповая стадия</span>
                    <p className={styles.dates}>{dates.groupStage}</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.stage} onClick={context.OpenModal}>
                    <span>Плей-офф</span>
                    <p className={styles.dates}>{dates.playoffs}</p>
                </div>
                <div>
                    <div className={styles.arrow_icon}/>
                </div>
                <div className={styles.stage} onClick={context.OpenModal}>
                    <span>Финал</span>
                    <p className={styles.dates}>{dates.final}</p>
                </div>
            </div>
            <div className={styles.buttons_sections}>
                <Link className={styles.a} to='/Esports-tournament-7Hills-/'><ButtonSecondary>Назад</ButtonSecondary></Link>
                <ButtonSecondary onClick={context.OpenModal}>Положение</ButtonSecondary>
                <Link to={registrationPath}><ButtonSecondary>Регистрация</ButtonSecondary></Link>

            </div>
            {context.isModalOpened &&
            <Modal active={context.isModalOpened} setActive={setModalActive}>Открыть
                <ButtonModal onClick={context.CloseModal}>Закрыть</ButtonModal>
            </Modal>}
        </div>
    );
};

export default TournamentRoadMap;
