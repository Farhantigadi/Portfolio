import React from "react";
import "../CSS/ProjectCard.css";

function ProjectCard({ title, description, image, github }) {
  return (
    <div className="custom-project-card-container">
      <div
        className="custom-project-card"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <a
          className="view-project-btn"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;