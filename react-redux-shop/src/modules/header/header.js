import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../components/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faShoppingCart, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './style.scss';

class Header extends Component {

    render() {
        const { compare } = this.props;
        return (
            <header className="header">
                <div className="container header__content">
                    <div className="header__logo">
                        <Link to="/">
                            Крамничка
                            <FontAwesomeIcon
                                size="1x"
                                className="header__logo-icon"
                                icon={faMobileAlt}
                            />
                        </Link>
                    </div>
                    <div className="header__search search">
                        <input type="text" placeholder="Поиск" />
                    </div>
                    <div className="header__actions user-actions">

                        <Link className="cart" to="/compare">
                            {
                                compare.length > 0
                                    ? <span className="counter">{compare.length}</span>
                                    : null
                            }
                            <FontAwesomeIcon
                                title='Сравнить'
                                size="2x"
                                icon={faBalanceScale}
                            />
                        </Link>

                        <Link className="cart" to="/cart">
                            <span className="counter">3</span>
                            <FontAwesomeIcon
                                title='Корзина'
                                size="2x"
                                icon={faShoppingCart}
                            />
                        </Link>

                    </div>
                </div>
            </header>
        );
    }
}


const mapStateToProps = store => {
    return {
        compare: store.compareReducer.compare
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
