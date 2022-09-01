import React from 'react';
import styles from './Paragraph.module.scss'

const Timming = ({time, banCartTime, cs}) => {
    return (
        <div className={styles.paragraph}>
            <ul>
                <li className={styles.point}>3. Тайминг</li>
                <ul className={styles.list_points}>
                    <li>3.1 <span>Перерыв между матчами - {time} минут (может быть увеличен на усмотрение
                        судьи)</span></li>
                    <li>3.2 <span>Сообщение о нарушении, предоставление доказательств нарушения - 15 минут
                        после окончания матча.</span></li>
                    <li>3.3 <span>Таймаут на подтверждение счета после завершения игры или открытия спора -
                        5 минут</span>
                    </li>
                    {cs && <li>3.4 <span>Таймаут на бан карт и ожидание игрока в лобби - {banCartTime} минут после определения
                        оппонента.</span></li>}
                </ul>
            </ul>
        </div>
    );
};

export default Timming;