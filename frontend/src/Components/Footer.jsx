import React from "react";
import "../Styles/Footer.css";
import logo from '../assets/LogoIcon.png'
import logoName from '../assets/LogoName.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <img src={logo} alt="VictoryFit Logo" className="footer-logo" />
            <img src={logoName} alt="VictoryFit LogoName" className="footer-logoName" />
          </div>

          <p>
            VictoryFit is your ultimate fitness destination focused on strength,
            endurance, and a healthy lifestyle. Our expert trainers and
            personalized programs help you stay motivated, achieve your goals,
            and build a stronger version of yourself every day.
          </p>

        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link className="Nav-route" to="/">Home</Link></li>
            <li><Link className="Nav-route" to="/about">About</Link></li>
            <li><Link className="Nav-route" to="/service">Services</Link></li>
            <li><Link className="Nav-route" to="/programs">Programs</Link></li>
            <li><Link className="Nav-route" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>

          <p>📍 Salem, Tamil Nadu, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@victoryfit.com</p>
          <p>🕒 Mon - Sat : 6AM - 10PM</p>
        </div>

      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/victoryfit" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icons fb" />
          </a>
          <a href="https://twitter.com/victoryfit" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="icons x" />
          </a>
          <a href="https://www.youtube.com/@victoryfit" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icons yt" />
          </a>
          <a href="https://www.instagram.com/victoryfit" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icons ig" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © 2026 VyoobamTech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
