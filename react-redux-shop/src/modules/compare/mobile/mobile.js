import React from 'react';
import { Link } from 'react-router-dom';
import { generator } from '../../details/characteristic/generator';

export const Mobile = ({ product, deleteCompare }) => {

  const handleClick = () => {
    deleteCompare(product.id);
  };

  return (
    < div >
      <div key={product.id}>
        <Link to={`phone/${product.id}`}>
          <h2>{product.title}</h2>
          <img src={product.image} alt="" />
        </Link>
        <div>
          {generator(product.characteristic)}
        </div>
        <button onClick={handleClick}>Удалить</button>
      </div>
    </div >
  );
};
