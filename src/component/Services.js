import React from "react";
import "./MusicStyle";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="header-container">
        <div className="header">
          <h1>
            {" "}
            <span>DISK JOCKEY / CONTENT CREATOR</span>
          </h1>
        </div>
      </div>
      <div className="banner-container">
        <div className="dj-banner">
          <h3>Disk Jockey</h3>
          <h5>6 Yrs Experience</h5>
        </div>
        <div className="curator-banner">
          <h3>Music Curator</h3>
          <h5>6 Yrs Experience</h5>
        </div>
      </div>
      <div className="banner2-container">
        <div className="banner">
          <h3>Disk Jockey</h3>
          <h5>6 Yrs Experience</h5>
        </div>
        <div className="editor-banner">
          <h3>Video Editor</h3>
          <h5>6 Yrs Experience</h5>
        </div>
      </div>
    </div>
  );
}
export default Services;
