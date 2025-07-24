import React from 'react';
import Skill from './Skill';
import '../CSS/Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      items: [
        { name: "React (Hooks, Router)" },
        { name: "Vite" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5/CSS3" }
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
        { name: "VS Code" },
        { name: "NPM" }
      ]
    },
    {
      category: "Database & Hosting",
      items: [
        { name: "MySQL" },
        { name: "Netlify" },
        { name: "Vercel" },
        { name: "Firebase" }
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
