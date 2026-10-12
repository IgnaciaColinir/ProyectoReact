import React from 'react';
import { ProductCard } from '../molecules/ProductCard';

export const ProductGrid = ({ products = [] }) => {
  return (
    <section className="products-section">
      <h2 className="section-title">BEST SELLERS</h2>
      <hr className="linea-decorativa" />
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};