import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { ProductCard } from '../molecules/ProductCard';

export const ShopTemplate = ({ todosLosProductos = [] }) => {
  const location = useLocation();

  const categorias = [...new Set(todosLosProductos.map((p) => p.category))];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category'); 

    if (categoryParam) {

      const formattedCategory = categoryParam.replace('-', ' ').toUpperCase();
      const sectionElement = document.getElementById(`section-${formattedCategory}`);
      
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="home-layout">
      <Header />

      <main className="shop-container">
        {categorias.map((catName) => {
          const categoriaProductos = todosLosProductos.filter((p) => p.category === catName);
          const sectionId = `section-${catName}`; 

          return (
            <section key={catName} id={sectionId} className="shop-category-section">
              <div className="category-header">
                <h2 className="category-header-title">{catName}</h2>
                <hr className="category-header-line" />
              </div>

              <div className="shop-product-grid">
                {categoriaProductos.map((producto) => (
                  <ProductCard 
                    key={producto.id} 
                    id= {producto.id}
                    image={producto.image}
                    imagenes={producto.imagenes}
                    titulo={producto.titulo}
                    marca={producto.marca || "VELVETIQUE"}
                    precio={producto.precio}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};