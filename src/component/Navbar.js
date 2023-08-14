import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LOGO from "../assets/images/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={LOGO} alt="vortex-logo" />
          </Link>
          <ul>
            <li>
              <Link to="/Home" className="home-btn">
                <span>00</span>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/About" className="about-btn">
                <span>01</span>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/Music-Style" className="music-btn">
                <span>02</span>
                MUSICSTYLE
              </Link>
            </li>
            <li>
              <Link to="/Services" className="services-btn">
                <span>03</span>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="Contact-btn">
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
