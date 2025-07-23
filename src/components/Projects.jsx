import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import "../CSS/Projects.css";

function Projects() {
  return (
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
  );
}

export default Projects;
