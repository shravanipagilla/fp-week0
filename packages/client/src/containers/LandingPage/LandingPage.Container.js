import React from 'react';
import './LandingPage.Style.css';
import { ProductsList } from './ProductsList';
import { products } from './Products';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-header">
        <span>LANDING PAGE</span>
      </div>
      <ProductsList products={products} />
    </div>
  );
};
