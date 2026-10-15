import React from 'react';
import { ShopTemplate } from '../components/Templates/ShopTemplate';

export const ShopPage = ({ todosLosProductos }) => {
  return <ShopTemplate todosLosProductos={todosLosProductos} />;
};
