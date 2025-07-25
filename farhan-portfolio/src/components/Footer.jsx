import React from "react";
import "../CSS/Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer " id="footer">
      <div className="footer-content">
        <div className="footer-name">
          <h2>Mohammadfarhan Tigadi</h2>
          <p>Java Backend Developer | Belagavi, India</p>
        </div>

        <div className="footer-links">
          <a
            href="mailto:farhantigadi123@gmail.com"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            farhantigadi123@gmail.com
          </a>
          <span className="footer-link">+91 6362888293</span>
        </div>

        <div className="footer-icons">
          <a
            href="https://github.com/Farhantigadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammadfarhan-tigadi-934258237"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/md_farhan_tigadi?igsh=MTE4anMyMzFzM3ZlbQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Farhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
