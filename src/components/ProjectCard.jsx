import React, { useState } from "react";
import "../CSS/ProjectCard.css";

function ProjectCard({ title, description, image, github }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="custom-project-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="project-title-area"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h2 className="project-title">{title}</h2>
        {hovered && (
          <div className="project-info">
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
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
