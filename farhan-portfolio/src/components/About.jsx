import React from "react";
import "../CSS/About.css";
import "../CSS/All.css";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import instaLogo from "../assets/instalogo.webp";
import email from "../assets/email.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-heading">
          <span className="highlight">Java Backend</span> <br />
          Developer & Learner at <span className="highlight">KodNest</span>
        </h1>

        <p className="about-description">
          Hello! I'm <strong>Mohammadfarhan Liyaqatali Tigadi</strong>, a recent engineering graduate from the 2025 batch,
          passionate about building backend systems using Java, Spring Boot, and REST APIs.
          I enjoy solving coding challenges, upskilling continuously, and collaborating in fast-paced Agile environments.
          Always eager to learn, I thrive on writing clean, efficient code and delivering impactful software solutions.
          Currently, I'm also diving into <span className="front">frontend development</span> to broaden my skill set.
        </p>

        <div className="about-social">
          <a href="https://github.com/Farhantigadi" target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/mohammadfarhan-tigadi-934258237" target="_blank" rel="noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/md_farhan_tigadi?igsh=MTE4anMyMzFzM3ZlbQ==" target="_blank" rel="noreferrer">
            <img src={instaLogo} alt="Instagram" />
          </a>
          <a href="mailto:farhantigadi123@gmail.com" target="_blank" rel="noreferrer" id="email">
            <img src={email} alt="Email" />
          </a>
         
        </div>
      </div>
    </section>
  );
}

export default About;
