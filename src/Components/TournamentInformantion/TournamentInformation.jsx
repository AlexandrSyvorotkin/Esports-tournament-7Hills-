import React from 'react';
import styles from './TournamentInformation.module.scss'

const TournamentInformation = () => {
    return (
        <>
            <div className={styles.tournament_information}>
                <p>МОСКОВСКАЯ ФЕДЕРАЦИЯ ПРОФСОЮЗОВ ПРОВОДИТ</p>
                <p> УЖЕ ТРЕТИЙ ОНЛАЙН-ТУРНИР ПО КИБЕРСПОРТУ СРЕДИ ТРУДОВЫХ И <br/> СТУДЕНЧЕСКИХ КОЛЛЕКТИВОВ ЧЛЕНСКИХ
                    ОРГАНИЗАЦИЙ
                    МФП!</p>
            </div>
            <div className={styles.vkLink}>
                <a href="https://vk.com/cybersportmfp">Наша группа Vkontakte!</a>
            </div>
        </>
    );
};

export default TournamentInformation;
