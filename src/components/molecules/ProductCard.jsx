import React from 'react';
import { Button } from '../atoms/Button';

export const ProductCard = ({ image, titulo, marca, precio }) => {
  return (
    <div className="caluga-producto">
      <div className="imagen-producto">
        <img src={image} alt={titulo} />
      </div>
      <h3 className="producto-titulo">{titulo}</h3>
      <span className="marca-producto">{marca}</span>
      <span className="precio-producto">${precio}</span>
      <Button variant="primary" className="btn-full">
        DETALLES
      </Button>
    </div>
  );
};