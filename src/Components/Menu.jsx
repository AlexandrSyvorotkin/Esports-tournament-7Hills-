import React from 'react';
import styles from './Menu.module.scss'

const Menu = ({header, items}) => {
    return (
        <div className={styles.menu}>
            <div className={styles.blur}/>
            <div className={styles.menu_content}>
                <div className={styles.menu_header}>{header}</div>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
