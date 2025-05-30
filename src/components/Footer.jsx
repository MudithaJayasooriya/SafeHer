import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>If you have questions, need support, or want to share your story, 
            we're here for you. Reach out to us anytime . 
             your voice matters and your safety is our priority.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>070-456-7890</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>support@safeher.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Main Street, High level road, FC 12345</span>
            </div>
          </div>

          <div className="icon-row">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <p>&copy; 2025 SafeHer App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;