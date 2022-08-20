import React from 'react';
import styles from './GameTimmings.module.scss'

const GameTimmings = () => {
    return (
        <div className={styles.game_timmings}>
            <span>4. Время матча и явка на матч</span>
            <ul>
                <li>4.1 Игроки должны явиться на матч за 10 минут до указанного времени старта
                    матча. Опоздания на матч не допускаются.</li>
                <li>4.2 При опоздании одной стороны вторая сторона имеет право требовать от судьи
                    признания технического поражения.</li>
            </ul>
        </div>
    );
};

export default GameTimmings;