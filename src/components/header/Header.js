import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import {list, item, activeItem} from './Header.module.css';


const Header = () => {
    return (
        <>
        <header>
        <ul className={list}>
            {routes.mainRoutes.map(({path, name, exact}) =>
            (<li key={path}>
                <NavLink to={path} exact={exact} className={item} activeClassName={activeItem}>{name}</NavLink></li>))}
        </ul>
        </header>
        </>
    );
}

export default Header;

