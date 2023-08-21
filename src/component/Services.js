import React from "react";
import "./MusicStyle";
import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="header-container">
      <div className="header">
        <h1>
          {" "}
          <span>DISK JOCKEY / CONTENT CREATOR</span>
        </h1>
        <div className="button-container">
          <Link to="/Music-Style" className="Music-btn">
            <button to="/Music-Style" className="button-86">
              DJ SERVICES
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Services;
