import React from 'react';
import styles from './Information.module.css'


import Tournament from "./Tournament";
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
