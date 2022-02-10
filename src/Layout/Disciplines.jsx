import React, {useState} from 'react';
import styles from './Disciplines.module.css'
import bara from '../Assets/disciplines/barathrum.png'

const Disciplines = () => {

    const [moreInformantion, setMoreInformation] = useState(false)

    const getPicture = () => {
        console.log('keka')
    }

    return (
        <div className={styles.disciplines}>
            <div className={styles.dota} onMouseEnter={getPicture}>
                <p>Dota 2</p>
                <div className={styles.arrow}></div>
            </div>
            <div className={styles.csgo}>
                <p>CS:GO</p>
                <div className={styles.arrow}></div>
            </div>
            <div className={styles.valorant}>
                <p>VALORANT</p>
                <div className={styles.arrow}></div>
            </div>
            <div className={styles.fifa}>
                <p>FIFA 22</p>
                <div className={styles.arrow}></div>
            </div>
        </div>
    );
};

export default Disciplines;