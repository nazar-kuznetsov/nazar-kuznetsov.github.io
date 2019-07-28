import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import './shipping.scss';

const Shipping = () => {
    return (
        <div className="shipping-container">
            <div className="shipping-logo">
                <FontAwesomeIcon
                    size={'3x'}
                    color="#F31F2B"
                    icon={faShippingFast}
                />
                <span>Бесплатная доставка</span>
            </div>
            <ul className="shipping">
                <li className="shipping__item">
                    <span>Самовывоз из Новой Почты</span>
                    <span>25 грн</span>
                </li>
                <li className="shipping__item">
                    <span>Отделение «УкрПошта»</span>
                    <span>15 грн</span>
                </li>
                <li className="shipping__item">
                    <span>Отделение «Justin» (Фора, Сільпо)</span>
                    <span>25 грн</span>
                </li>
                <li className="shipping__item">
                    <span>Самовывоз из наших магазинов</span>
                    <span>Бесплатно</span>
                </li>
                <li className="shipping__item">
                    <span>Курьер по вашему адресу</span>
                    <span>Бесплатно</span>
                </li>
                <li className="shipping__item">
                    <span>Курьер по вашему адресу за 2 часа</span>
                    <span>100 грн</span>
                </li>
            </ul>
        </div>
    )
}

export default Shipping;
