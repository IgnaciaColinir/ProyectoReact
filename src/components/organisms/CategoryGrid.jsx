import React from 'react';


export const CategoryGrid = ({categorias}) => {
  const listaCategorias = Array.isArray(categorias) ? categorias : [];
  return (
    <section className="category-section">
      <h2 className="section-title">SHOP BY CATEGORY</h2>
      <hr className="linea-decorativa" />
      <div className="category-grid">
        {categorias.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="category-image-wrapper">
              <img src={cat.image} alt={cat.title} />
            </div>
            <span className="category-title">{cat.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};