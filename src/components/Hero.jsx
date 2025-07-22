import React from "react";
import "../CSS/Hero.css";
import heroBg from "../assets/homepage1.jpg";  

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <h1 className="hero-title">FARHAN</h1>
    </section>
  );
}

export default Hero;