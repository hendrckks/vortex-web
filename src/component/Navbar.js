import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LOGO from "../assets/images/logo.png";

function Navbar({ onLinkClick }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={LOGO} alt="vortex-logo" />
          </Link>
          <ul>
            <li>
              <Link to="/Home" className="home-btn" onClick={onLinkClick}>
                <span>00</span>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/About" className="about-btn" onClick={onLinkClick}>
                <span>01</span>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/Mixes" className="music-btn" onClick={onLinkClick}>
                <span>02</span>
                MIXES
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                className="services-btn"
                onClick={onLinkClick}
              >
                <span>03</span>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="contact-btn" onClick={onLinkClick}>
                <span>04</span>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
