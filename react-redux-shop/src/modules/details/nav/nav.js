import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.scss';

const Nav = React.memo(({match, feedback}) => {
    return (
        <nav className="nav-details">
            <ul className="nav-details__list">
                <li className="nav-details__item">
                    <NavLink className="nav-details__link" to={`${match.url}`} exact={true}>ВСЕ О ТОВАРЕ</NavLink>
                </li>
                <li className="nav-details__item">
                    <NavLink className="nav-details__link" to={`${match.url}/characteristic`}>ХАРАКТЕРИСТИКИ</NavLink>
                </li>
                <li className="nav-details__item">
                    <NavLink className="nav-details__link" to={`${match.url}/gallery`}>ФОТО</NavLink>
                </li>
                <li className="nav-details__item">
                    <NavLink className="nav-details__link" to={`${match.url}/feedback`}>ОТЗЫВЫ {feedback?.length}</NavLink>
                </li>
            </ul>
        </nav>
    )
});


export default Nav;