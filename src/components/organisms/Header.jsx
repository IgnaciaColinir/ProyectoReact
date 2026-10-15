import React from 'react';
import logoImg from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <Link to ="/" className="logo">
          <img className="icono" src={logoImg} alt="Velvetique Logo"/>
          <span className="header-titulo">VELVETIQUE</span>
        </Link>

        <nav>
          <ul className="nav-lista">
            <li><Link to= "/" className="nav-link">HOME</Link></li>
            <li><Link to= "/shop" className="nav-link">SHOP</Link></li>
            <li><a href="#contact" className="nav-link">CONTACT</a></li>
            <li><a href="#signin" className="nav-link">SIGN IN</a></li>
          </ul>
        </nav>
        <div className="icono">
          <a href="#">
            <i className="bi bi-person"></i>
          </a>
          <a href="#" className="icono">
            <i className="bi bi-bag"></i>
          </a>
        </div>
      </div>
    </header>
  );
};