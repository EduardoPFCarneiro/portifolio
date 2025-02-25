import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Importe o CSS

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre-mim">Sobre Mim</Link></li>
        <li><Link to="/experiencia">Experiência</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
