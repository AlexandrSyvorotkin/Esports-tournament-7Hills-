import React, {useContext} from 'react';
import styles from './Menu.module.scss'
import {Link} from "react-router-dom";
import MenuButton from "../../../UI/MenuButton";
import SideMenuContext from "../../../context/modal-context";

//TODO: сделать ападтив под мобилку с продлением подложки

const menu = [
    {id: 1, title: 'Главная', path: '/'},
    {id: 2, title: 'Контакты', path: '/contacts'},
    {id: 3, title: 'Галерея', path: '/photosgalary'},
    {id: 4, title: 'О проекте', path: '/aboutus'},
    {id: 5, title: 'Регистрация', path: '/registration'},
    {id: 6, title: 'FAQ', path: '/faq'},
    {id: 7, title: 'Регламенты', path: '/docs/position'},
    {id: 8, title: 'Турнирные сетки', path: '/tournament-brackets'},
]


const Menu = () => {
    const ctx = useContext(SideMenuContext)

    return (
        <div className={`${ctx.isSideMenuOpened ? styles.menu_active : styles.menu}`}>
            <div className={styles.blur} onClick={ctx.CloseSideMenu}/>
            <div className={styles.menu_content}>
                <ul>
                    {menu.map(({id, title, path}) => (
                        <li key={id}>
                            <Link to={path}><MenuButton onClick={ctx.CloseSideMenu}>{title}</MenuButton></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
