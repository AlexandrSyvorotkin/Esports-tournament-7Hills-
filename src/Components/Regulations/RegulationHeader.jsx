import React from 'react';
import styles from './RegulationHeader.module.scss'

const RegulationHeader = ({children}) => {
    return (
        <div className={styles.regulation_header}>
            {children}
        </div>
    );
};

export default RegulationHeader;
