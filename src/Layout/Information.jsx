import React from 'react';
import styles from './Information.module.scss'


import Tournament from '../Components/Tournament'
import Header from "../Layout/Header";

const Information = () => {
    return (
        <main className={styles.information}>
            <Header/>
            <Tournament/>
        </main>
    );
};

export default Information;
