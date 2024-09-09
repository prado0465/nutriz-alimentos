import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation-container">
      <Link to="/">
        <img src="https://nutriz.com.br/static/media/logo.c654380388ad2deaec40.png" alt="Logo" className="logo" />
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navigation-menu ${menuOpen ? 'menu-open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/suport">Suporte</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
