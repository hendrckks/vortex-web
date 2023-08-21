import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import MusicStyle from "./component/MusicStyle";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Rights from "./component/Rights";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { playTransitionAnimation } from "./component/Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMixcloud } from "@fortawesome/free-brands-svg-icons";

function App() {
  function HandleInstagramClick() {
    window.location.href = "https://www.instagram.com/djvortex254/";
  }
  function HandleTwitterClick() {
    window.location.href = "https://www.twitter.com/djvortex254/";
  }
  function HandleYoutubeClick() {
    window.location.href = "https://www.youtube.com/@DjVortex254";
  }
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageTransition = () => {
    playTransitionAnimation(setIsTransitioning);
  };

  useEffect(() => {
    const handlePopstate = () => {
      handlePageTransition();
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar onLinkClick={handlePageTransition} />
        <div
          className={`content-container ${
            isTransitioning ? "fade-out" : "fade-in"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Music-style" element={<MusicStyle />} />
            <Route
              path="/Services"
              element={<Services transition={handlePageTransition} />}
            />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="bottom-container">
          <Rights className="copy-write" />
          <div className="socials-icons">
            <InstagramIcon onClick={HandleInstagramClick} />
            <TwitterIcon onClick={HandleTwitterClick} />
            <YouTubeIcon onClick={HandleYoutubeClick} />
            <FontAwesomeIcon icon={faMixcloud} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
