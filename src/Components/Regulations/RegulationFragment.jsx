import React from 'react';
import styles from './RegulationFragment.module.scss'

const RegulationFragment = ({text}) => {
    return (
        <div className={styles.regulation_common}>
            {text.map(it => (
                <div className={styles.text_fragment}>
                    <p className={styles.number}>{it.number}</p>
                    <p>{it.text}</p>
                </div>
            ))}
        </div>
    );
};

export default RegulationFragment;
