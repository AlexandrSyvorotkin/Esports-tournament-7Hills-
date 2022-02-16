import React from 'react';
import styles from './Information.module.css'

import Header from "./Header";
import Tournament from "./Tournament";

const Information = () => {
    return (
        <div className={styles.information}>
            <Header/>
            <Tournament/>
        </div>
    );
};

export default Information;