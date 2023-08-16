import React from "react";
import "./Home.css";
import MEMOJI from "../assets/images/IMG_1450.JPG";
import WavingHandIcon from "@mui/icons-material/WavingHand";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>
          Dj Vortex 254 <WavingHandIcon />
        </h1>
        <h1>Proffesional Disk Jockey & Content Creator</h1>
      </div>
      <div className="memoji">
        <img src={MEMOJI} alt="vortex-memoji" />
      </div>
    </div>
  );
}

export default Home;
