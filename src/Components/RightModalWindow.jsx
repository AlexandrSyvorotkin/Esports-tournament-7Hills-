import React from 'react';
import styles from './RightModalWindow.module.css'

const RightModalWindow = ({active, setActive}) => {
    return (
        <div className={styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modal_content} onClick={event => event.stopPropagation()}>
                <ul>
                    <li>Dota</li>
                    <li>CSGO</li>
                    <li>Valorant</li>
                    <li>Fifa</li>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Расписание</li>
                </ul>
                <div>
                    <button onClick={()=> setActive(false)}>Закрыть</button>
                </div>

            </div>
        </div>
    );
};

export default RightModalWindow;
