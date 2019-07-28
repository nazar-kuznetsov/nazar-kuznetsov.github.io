import React from 'react';
import './characteristic.scss';
import { generator } from './generator';

const Characteristic = React.memo((props) => {
    const { characteristic } = props.product;



    return (
        <div className="details-characteristic">
            <h2 className="details__title">Характеристики <span>{props.product.title}</span></h2>
            <div>
                {generator(characteristic)}
            </div>
        </div>
    );
});

export default Characteristic;