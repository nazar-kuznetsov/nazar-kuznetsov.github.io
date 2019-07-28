import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <aside className="aside">
        <ul>
          <li>
            Xiaomi
            {/* <NavLink exact={true} to="/" activeClassName="active">Главная</NavLink> */}
          </li>
          <li>
            Iphone
            {/* <NavLink to="/cart" activeClassName="active">Корзина</NavLink> */}
          </li>
          <li>
            Samsung
            {/* <NavLink to="/details/:id" activeClassName="active">Детально</NavLink> */}
          </li>
        </ul>
      </aside>
    );
  }
}


export default Header;
