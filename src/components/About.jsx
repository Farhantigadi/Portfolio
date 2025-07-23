import React from "react";
import "../CSS/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-heading">
          <span className="highlight">Java Backend Developer</span> <br />& Learner at <span className="highlight">KodNest</span>
        </h1>
        <p className="about-description">
  Hello! I'm <strong>Mohammadfarhan Tigadi</strong>, a recent engineering graduate from the 2025 batch, passionate about building scalable backend systems using Java, Spring Boot, and REST APIs. I enjoy solving coding challenges, upskilling continuously, and collaborating in fast-paced Agile environments. Always eager to learn, I thrive on writing clean, efficient code and delivering impactful software solutions. Currently, I'm also diving into <span className="front">frontend development</span> to broaden my skill set.
</p>

      </div>
    </section>
  );
}

export default About;
