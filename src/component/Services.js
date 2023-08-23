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
          <div className="skill">
            <h3>Disk Jockey</h3>
            <div className="rank-jockey">
              <p>very good</p>
            </div>
          </div>
          <h5>6 Yrs Experience</h5>
        </div>
        <div className="curator-banner">
          <div className="skill">
            <h3>Music Curator</h3>
            <div className="rank-curator">
              <p>very good</p>
            </div>
          </div>
          <h5>6 Yrs Experience</h5>
        </div>
      </div>
      <div className="banner2-container">
        <div className="banner">
          <div className="skill">
            <h3>Content Creator</h3>
            <div className="rank-content">
              <p>very good</p>
            </div>
          </div>
          <h5>1 Yrs Experience</h5>
        </div>
        <div className="editor-banner">
          <div className="skill">
            <h3>Video Editor</h3>
            <div className="rank-video">
              <p>good</p>
            </div>
          </div>
          <h5>2 Yrs Experience</h5>
        </div>
      </div>
    </div>
  );
}
export default Services;
