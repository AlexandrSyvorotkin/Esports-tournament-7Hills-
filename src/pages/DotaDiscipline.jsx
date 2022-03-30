import React, {useState} from 'react';
import styles from './DotaDiscipline.module.scss'
import Button from "../UI/Button";
import {Link} from "react-router-dom";
import Modal from "../UI/Modal";

const DotaDiscipline = () => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={styles.dota}>
            <h2>Dota Tournament RoadMap</h2>
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
                <div>2 мая</div>
                <div>3-6 мая</div>
                <div>8-10 мая</div>
                <div>11-13 июня</div>
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

export default DotaDiscipline;
