import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

import logo from '../logos/diario-preto.png'

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleClick = () => setIsMobile(!isMobile)

  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} alt="logo navbar" />
      </div>
      <ul
        className={isMobile ? 'nav-links active' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="link-navbar">
          <li>Home</li>
        </Link>
        <Link to="/about" className="link-navbar">
          <li>Sobre Mim</li>
        </Link>
        <Link to="/contact" className="link-navbar">
          <li>Contact</li>
        </Link>
        <Link to="/faq" className="link-navbar">
          <li>Dúvidas</li>
        </Link>
      </ul>
      <div className="mobile-menu-icon" onClick={handleClick}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </nav>
  )
}
