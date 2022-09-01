import React from 'react';
import styles from './Paragraph.module.scss'

const GameTimmings = () => {
    return (
        <div className={styles.paragraph}>
            <ul>
                <li className={styles.point}>4. Время матча и явка на матч</li>
                <ul className={styles.list_points}>
                    <li>4.1 <span>Игроки должны явиться на матч за 10 минут до указанного времени старта
                        матча. Опоздания на матч не допускаются.</span></li>
                    <li>4.2 <span>При опоздании одной стороны вторая сторона имеет право требовать от судьи
                        признания технического поражения.</span></li>
                </ul>
            </ul>
        </div>
    );
};

export default GameTimmings;