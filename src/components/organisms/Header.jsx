import React from 'react';
import logoImg from '../../assets/logo.jpg';
export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="brand-logo">
          <img className="brand-icon" src={logoImg} alt="Velvetique Logo"/>
          <span className="brand-title">VELVETIQUE</span>
        </div>

        <nav>
          <ul className="nav-list">
            <li><a href="#" className="nav-link">HOME</a></li>
            <li><a href="#" className="nav-link">SHOP</a></li>
            <li><a href="#" className="nav-link">CONTACT</a></li>
            <li><a href="#" className="nav-link">SIGN IN</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#">
            <i class="bi bi-person"></i>
          </a>
          <a href="#" class="resaltar">
          <i class="bi bi-bag"></i>
          </a>
        </div>
      </div>
    </header>
  );
};