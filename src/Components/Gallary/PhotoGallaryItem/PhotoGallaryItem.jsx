import React from 'react';
import styles from './PhotoGallaryItem.module.scss'
import {Link} from "react-router-dom";

const PhotoGallaryItem = ({img, path, gallay_year}) => {
    return (
        <div className={styles.single_gallary}>
            <Link to={path}>
                <img src={img} alt=""/>
            </Link>
            <span>{gallay_year}</span>
        </div>

    );
};

export default PhotoGallaryItem;