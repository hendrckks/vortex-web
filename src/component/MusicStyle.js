import React from "react";
import "./MusicStyle.css";
import COOL from "../assets/images/CoolKid.jpg";
import VAIBU from "../assets/images/Vaibu.jpg";
import THIRTY from "../assets/images/Thirty.jpg";

function MusicStyle() {
  function onCoolClick() {
    window.open(
      "https://hearthis.at/dj-vortex-254-jc/cool-kid-vibe-1-dj-vortex-254/",
      "_blank"
    );
  }
  function onVaibuClick() {
    window.open(
      "https://hearthis.at/dj-vortex-254-jc/vaibu-ep-2-dj-vortex-254/",
      "_blank"
    );
  }
  function onThirtyClick() {
    window.open(
      "https://www.mixcloud.com/DjVortex254/30-minutes-innit-8-dj-vortex-254/",
      "_blank"
    );
  }
  return (
    <div className="centered-container">
      <div className="music-style">
        <h3 className="vibe">MIXES</h3>
        <div className="album-container">
          <div className="album">
            <img src={VAIBU} alt="cool-album" />
            <div className="overlay" onClick={onVaibuClick}>
              <p>VAIBU</p>
            </div>
          </div>
          <div className="album">
            <img src={COOL} alt="cool-album" />
            <div className="overlay" onClick={onCoolClick}>
              <p>Cool Kid Vibes</p>
            </div>
          </div>
          <div className="album">
            <img src={THIRTY} alt="cool-album" />
            <div className="overlay" onClick={onThirtyClick}>
              <p>30 INNIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicStyle;
