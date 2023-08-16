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

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Listen to the 'popstate' event when the user navigates back/forward
    const handlePopstate = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2000);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []); // Run the effect only once when the component mounts

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div
          className={`content-container ${isTransitioning ? "fade-out" : ""}`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Music-style" element={<MusicStyle />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Rights />
      </Router>
    </div>
  );
}

export default App;
