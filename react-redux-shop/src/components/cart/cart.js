import React from 'react';
import './cart.scss';

export const Cart = ({icon, counter}) => {
  return (
    <div className="cart">
      {counter > 0 && <div className="counter">{counter}</div>}
      <div><i className={icon} /></div>
    </div>
  );
};
