import React from 'react';
import Skill from './Skill';
import '../CSS/Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      items: [
        { name: "React (Learning) " },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
        { name: "& Some libraries" },

      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java" },
        { name: "Spring Boot" },
        { name: "JWT Auth" },
        { name: "REST APIs" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git & GitHub" },
        { name: "Postman" },
        { name: "Sonar Cloud" },
        { name: "Github Action" }
      ]
    },
    {
      category: "Database & Others",
      items: [
        { name: "MySQL" },
        { name: " Agile-Scrum understanding" },
        { name: " IntelliJ & VS Code" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <span className="latest">Skills</span>
      <div className="skills-container">
        {skillsData.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((skill, index) => (
                <Skill key={index} name={skill.name} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
