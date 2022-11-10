/* eslint-disable react/prop-types */
import React from 'react';

export const ProductsList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id}>
          <div>{product.name}</div>
        </li>
      ))}
    </ul>
  );
};
