import { Link } from 'react-scroll';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <h1 className="logo">Sesra</h1>
        </div>

        {/* Center Section: WhatsApp & Phone Icons */}
        <div className="navbar-center">
          <a href="https://wa.me/27712345678" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaWhatsapp size={24} color="#25D366" />
          </a>
          <a href="tel:+27712345678" className="icon-link">
            <FaPhone size={24} color="#007BFF" />
          </a>
        </div>

        {/* Right Section: Navigation Links */}
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500} className="nav-item">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="nav-item">About</Link></li>
          <li><Link to="services" smooth={true} duration={500} className="nav-item">Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="nav-item">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
