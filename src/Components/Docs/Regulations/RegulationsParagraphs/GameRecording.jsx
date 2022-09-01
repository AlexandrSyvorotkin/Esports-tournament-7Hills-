import React from 'react';
import styles from './Paragraph.module.scss'

const GameRecording = () => {
    return (
        <div className={styles.paragraph}>
            <ul>
                <li className={styles.point}>5. Запись игры</li>
                <ul className={styles.list_points}>
                    <li>5.1 <span>Игроки имеют право вести запись игры с целью сбора материалов,
                        доказывающих спорность момента и нарушение правил со стороны соперника.</span></li>
                    <li>5.2 <span>В случаи спорных моментов в матче, игроки обязаны предоставить запись игры
                        по требованию судьи.</span></li>
                </ul>
            </ul>
        </div>
    );
};

export default GameRecording;