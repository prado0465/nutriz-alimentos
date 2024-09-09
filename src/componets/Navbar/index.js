import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbrar" >
      <h1>Nutriz Alimentos</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
