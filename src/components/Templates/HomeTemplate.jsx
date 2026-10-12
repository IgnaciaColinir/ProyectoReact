import React from 'react';
import { Header } from '../organisms/Header';
import { CategoryGrid } from '../organisms/CategoryGrid';
import { ProductGrid } from '../organisms/ProductGrid';
import { Footer } from '../organisms/Footer';
import { Button } from '../atoms/Button';
import AnuncioImg from '../../assets/oferta.jpg';

export const HomeTemplate = ({ productos, categorias }) => {
  return (
    <div className="home-layout">
      <Header />

      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-subtitle">NEW IN</span>
          <h1 className="hero-title">
            RADIANT SKIN.<br />REAL CONFIDENCE
          </h1>
          <p className="hero-description">
            Clean beauty that nourishes, enhances and empowers you
          </p>
          <Button variant="primary">SHOP NOW</Button>
        </div>
      </section>

      <div className="features-banner">
        <div className="features-container">
          <div className="feature-item">
            <span className="feature-icon">🌿</span>
            <div className="feature-info">
              <h4>Clean Ingredients</h4>
              <p>Safe and toxic-free</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <div className="feature-info">
              <h4>Clinically Proven</h4>
              <p>Dermatologically tested</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🐰</span>
            <div className="feature-info">
              <h4>Cruelty Free</h4>
              <p>We never test on animals</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌍</span>
            <div className="feature-info">
              <h4>Sustainable Beauty</h4>
              <p>Good for you & the planet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="calugas-cont">
        <CategoryGrid categorias={categorias} />
      </div>
      

      <section className="promo-section">
        <div className="promo-card">
          <div className="promo-content">
            <span className="promo-tag">LIMITED TIME OFFER</span>
            <h2 className="promo-title">Up to 30% Off<br />on Best Sellers</h2>
            <p className="promo-desc">Glow more, spend less.<br />Treat your skin today!</p>
            <Button variant="secondary">SHOP THE SALE</Button>
          </div>
          <div className="promo-image">
            <img src={AnuncioImg} alt="Promo products" />
          </div>
        </div>
      </section>

      <div className="calugas-cont">
        <ProductGrid productos={productos} />
      </div>
      
      <Footer />
    </div>
  );
};