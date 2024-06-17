import React from 'react';
import './Footer.css';
import LinkedInIcon from '../../src/assets/linkedin.png';
import InstagramIcon from '../../src/assets/instagram-logo.png';
import TwitterIcon from '../../src/assets/twitter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Useful Links</h2>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <ul className="social-icons">
              <li><a href="#"><img src={LinkedInIcon} alt="LinkedIn" /></a></li>
              <li><a href="#"><img src={InstagramIcon} alt="Instagram" /></a></li>
              <li><a href="#"><img src={TwitterIcon} alt="Twitter" /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
