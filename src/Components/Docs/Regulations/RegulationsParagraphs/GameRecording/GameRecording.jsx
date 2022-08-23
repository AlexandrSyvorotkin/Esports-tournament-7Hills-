import React from 'react';
import styles from './GameRecording.module.scss'

const GameRecording = () => {
    return (
        <div className={styles.game_recording}>
            <span>5. Запись игры</span>
            <ul>
                <li>5.1 Игроки имеют право вести запись игры с целью сбора материалов,
                    доказывающих спорность момента и нарушение правил со стороны соперника.</li>
                <li>5.2 В случаи спорных моментов в матче, игроки обязаны предоставить запись игры
                    по требованию судьи.</li>
            </ul>
        </div>
    );
};

export default GameRecording;