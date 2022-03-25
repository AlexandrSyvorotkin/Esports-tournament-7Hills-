import React from 'react';
import styles from './Information.module.css'


import Tournament from "./Tournament";
import Header from "../Layout/Header";

const Information = () => {
    return (
        <div className={styles.information}>
            <Header/>
            <Tournament/>
        </div>
    );
};

export default Information;
