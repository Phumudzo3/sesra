import '../styles/footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Company Info */}
        <div className="footer-info">
          <p className="footer-text">© {new Date().getFullYear()} SESRA. All Rights Reserved.</p>
          <p className="footer-address">Created by P3.dev</p>
        </div>

        {/* Center Section: Social Media Links */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>

        {/* Right Section: Contact Details */}
        <div className="footer-contact">
          <p><FaPhone /> +27 71 234 5678</p>
          <p><FaEnvelope /> info@sesra.co.za</p>
          <p><FaMapMarkerAlt /> Stand No 69, Ga Mothapo, Polokwane 0734, South Africa</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
