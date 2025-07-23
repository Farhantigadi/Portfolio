import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import "../CSS/Projects.css";

function Projects() {
  return (
    <div>
      <span className="latest"> Projects</span>
    <section id="projects" className="projects-wrapper">
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          github={project.github}
        />
      ))}
    </section>
    </div>
  );
}

export default Projects;
