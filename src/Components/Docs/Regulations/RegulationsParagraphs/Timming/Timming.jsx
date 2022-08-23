import React from 'react';
import styles from './Timming.module.scss'

const Timming = ({time, banCartTime, cs}) => {
    return (
        <div className={styles.timming}>
            <span>3. Тайминг</span>
            <ul>
                <li>3.1 Перерыв между матчами - {time} минут (может быть увеличен на усмотрение
                    судьи)</li>
                <li>3.2 Сообщение о нарушении, предоставление доказательств нарушения - 15 минут
                    после окончания матча.</li>
                <li>3.3 Таймаут на подтверждение счета после завершения игры или открытия спора -
                    5 минут
                </li>
                {cs && <li>3.4 Таймаут на бан карт и ожидание игрока в лобби - {banCartTime} минут после определения
                    оппонента.</li>}
            </ul>
        </div>
    );
};

export default Timming;