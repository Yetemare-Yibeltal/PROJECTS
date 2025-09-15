import React from "react";
import backgroundVideo from "../../Videos/background-video2.mp4";
import {Link} from "react-router-dom"
function Hero() {
  return (
    <section className="hero-section" id="hero">
      <video className="hero-background-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-header">Your comfort Starts at Gashuna Dangila</h1>
        <p className="hero-subheading">
          Affordable , Clean, and Peacefull Staty on Gashuna.
        </p>
        <Link
          to="rooms"
          smooth={true}
          duration={500}
          className="hero-cta-button"
        >
          Check Availablity
        </Link>
      </div>
    </section>
  );
}

export default Hero;
