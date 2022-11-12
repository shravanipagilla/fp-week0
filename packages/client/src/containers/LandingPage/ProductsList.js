/* eslint-disable react/prop-types */
import React from 'react';

export const ProductsList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id}>
          <div>Spice {product.id}: &nbsp;{product.name}</div>
        </li>
      ))}
    </ul>
  );
};
