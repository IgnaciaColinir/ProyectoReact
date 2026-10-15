import React from 'react';
import { Button } from '../atoms/Button';

export const Footer = () => {
  return (
    <>
      <footer className="footer-servicios">
        <div className="servicios-container">
          <div className="feature-item">
            <i className="bi bi-truck"></i>
            <div className="feature-info">
              <h4>FREE SHIPPING</h4>
              <p>On orders over $999</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-arrow-repeat"></i>
            <div className="feature-info">
              <h4>EASY RETURN</h4>
              <p>15 days return policy</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-shield-lock"></i>
            <div className="feature-info">
              <h4>SECURE PAYMENT</h4>
              <p>100% secure checkout</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-headset"></i>
            <div className="feature-info">
              <h4>24/7 SUPPORT</h4>
              <p>We here to help</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '16px' }}>
              <span className="brand-title" style={{ color: '#fff' }}>VELVETIQUE</span>
            </div>
            <p style={{ fontSize: '13px', opacity: 0.8 }}>Thoughtful beauty for every skin, every day.</p>
          </div>
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>CUSTOMER CARE</h4>
            <ul>
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Shipping policy</a></li>
              <li><a href="#">Return & Refund</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>NEWSLETTER</h4>
            <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px' }}>Subscribe to get special offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="input-text" />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};