import React from 'react';
import styles from './Information.module.scss'
import Header from "../Layout/Header";
import Tournament from "../Components/Tournament/Tournament";



const Information = () => {
    return (
        <main className={styles.information}>
            <Header/>
            <Tournament/>
        </main>
    );
};

export default Information;
