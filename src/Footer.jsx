import React from "react";
import "./Styles/Footer.css";
import logo from './assets/weightlifting.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      {/* Top footer content */}
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="VictoryFit Logo" className="footer-logo" />
          <h3>VictoryFit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pharetra condimentum.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Link</h4>
          <ul>
            <Link className="Nav-route" to="/"><li> Home</li></Link>
            <Link className="Nav-route" to="/about"><li>About</li></Link>
            <Link className="Nav-route" to="/service"><li>Services</li></Link>
            <Link className="Nav-route" to="/programs"><li>Programs</li></Link>
            <Link className="Nav-route" to="/contact"><li>Contact</li></Link>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* <span>Facebook</span>
            <span>Twitter</span>
            <span>Youtube</span>
            <span>Instagram</span> */}
            {/* <a href="#"><i className="fa-brands fa-facebook"></i></a> */}
            <i className="fa-brands fa-facebook"></i>
            {/* <a href="#"><i className="fa-brands fa-twitter"></i></a> */}
            <i className="fa-brands fa-twitter"></i>
            {/* <a href="#"><i className="fa-brands fa-youtube"></i></a> */}
            <i className="fa-brands fa-youtube"></i>
            {/* <a href="#"><i className="fa-brands fa-instagram"></i></a> */}
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="footer-bottom">
        Copyright © 2026 VyoobamTech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
