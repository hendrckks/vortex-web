import React from "react";
import "./MusicStyle.css";
import COOL from "../assets/images/CoolKid.jpg";
import POP from "../assets/images/PopCulture.jpg";
import NAIJA from "../assets/images/NaijaFusion.jpg";
import DROP from "../assets/images/OneDrop.jpg";
import VAIBU from "../assets/images/Vaibu.jpg";
import THIRTY from "../assets/images/Thirty.jpg";

function MusicStyle() {
  return (
    <div className="centered-container">
      <div className="music-style">
        <h3 className="vibe">Feel The Vibe</h3>
        <div className="paragraph">
          <p className="content">
            Immerse yourself in a symphony of rhythm that traverses continents
            and genres, curated by our eclectic DJ. Drawing inspiration from the
            pulsating heart of Afrobeat, the vibrant beats of Kenyan melodies,
            the soulful harmonies of R&B, and the electrifying energy of hip-hop
            and rap, our music style ignites a dance floor where cultures
            collide. With a seamless fusion of Caribbean vibes, our DJ creates
            an atmosphere that transcends borders, unleashing waves of euphoria
            that ride on the breeze. Experience the ultimate sonic journey,
            where each track is a chapter in an unscripted global groove,
            harmonizing the world's beats into a singular rhythm that resonates
            within every soul.
          </p>
        </div>
        <div className="album-container">
          <img src={VAIBU} alt="cool-album" />
          <img src={COOL} alt="cool-album" />
          <img src={THIRTY} alt="cool-album" />
          <img src={DROP} alt="cool-album" />
          <img src={NAIJA} alt="cool-album" />
          <img src={POP} alt="cool-album" />
        </div>
      </div>
    </div>
  );
}

export default MusicStyle;
