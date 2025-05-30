import React from 'react';
import './all.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt
} from 'react-icons/fa';
import {
  SiMongodb, SiTailwindcss, SiRedux, SiExpress, SiMysql
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#3C873A' },
  { name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
