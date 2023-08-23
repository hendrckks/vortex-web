import React from "react";
import "./MusicStyle.css";
import COOL from "../assets/images/CoolKid.jpg";
import VAIBU from "../assets/images/Vaibu.jpg";
import THIRTY from "../assets/images/Thirty.jpg";

function MusicStyle() {
  return (
    <div className="centered-container">
      <div className="music-style">
        <h3 className="vibe">MIXES</h3>
        <div className="album-container">
          <div className="album">
            <img src={VAIBU} alt="cool-album" />
            <div className="overlay">
              <p>VAIBU</p>
            </div>
          </div>
          <div className="album">
            <img src={COOL} alt="cool-album" />
            <div className="overlay">
              <p>Cool Kid Vibes</p>
            </div>
          </div>
          <div className="album">
            <img src={THIRTY} alt="cool-album" />
            <div className="overlay">
              <p>30 INNIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicStyle;
