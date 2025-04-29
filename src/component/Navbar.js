import { Link } from 'react-scroll';
import { FaWhatsapp, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <h1 className="logo">
            <img src='/WhatsApp Image 2025-04-11 at 10.34.03_620b6faf.jpg' alt='logo' />
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Center Section: Icons (hidden on mobile) */}
        <div className="navbar-center">
          <a href="https://wa.me/27722014044" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaWhatsapp size={24} color="#25D366" />
          </a>
          <a href="tel:+27722014044" className="icon-link">
            <FaPhone size={24} color="#007BFF" />
          </a>
        </div>

        {/* Right Section: Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} className="nav-item" onClick={closeMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="nav-item" onClick={closeMenu}>About</Link></li>
          <li><Link to="services" smooth={true} duration={500} className="nav-item" onClick={closeMenu}>Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="nav-item" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
