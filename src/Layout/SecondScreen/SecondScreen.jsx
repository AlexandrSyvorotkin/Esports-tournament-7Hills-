import React from 'react';
import styles from './SecondScreen.module.css'
import Button from "../../UI/Button";

const SecondScreen = ({setSecondScreenActive}) => {

    const closeSecondScreenHandler = () => {
        setSecondScreenActive(false)
    }

    return (
        <div className={styles.second_scr}>
            <p>Second Screen</p>
            <Button onClick={closeSecondScreenHandler}>Закрыть</Button>
        </div>
    );
};

export default SecondScreen;
