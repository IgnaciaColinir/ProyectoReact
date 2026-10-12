import React from 'react';
import { Button } from '../atoms/Button';

export const ProductCard = ({ image, title, brand, price }) => {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={image} alt={title} />
      </div>
      <h3 className="product-title">{title}</h3>
      <span className="product-brand">{brand}</span>
      <span className="product-price">${price}</span>
      <Button variant="primary" className="btn-full">
        DETAILS
      </Button>
    </div>
  );
};