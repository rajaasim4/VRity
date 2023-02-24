import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="Hero">
      <NavBar />
      <div className="Hero-main">
        <div className="Hero-heading">
          <h1>
            <span>Virtual</span>
            <br /> Reality
          </h1>
          <button className="Main-btn">What is this?</button>
        </div>
        <div className="gradient-circle hero-circle-1"></div>
        <div className="gradient-circle hero-circle-2"></div>
        <div className="gradient-circle hero-circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
