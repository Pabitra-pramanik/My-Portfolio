import React from 'react';
import './all.css';
import cafeImage from '../assets/cafe.png';
import productimage from '../assets/knot-love.png';
import portfolioimage from '../assets/portfolio.png';
export default function Projects() {
  return (
    <section id="projects">
      <h2><center>Projects</center></h2><br/>
      <div className="project-grid">
        <div className="project-card"><center>
        <img src={portfolioimage} alt="About Me" className="about-image" />
          <h3>Portfolio Website</h3>
          <p>A modern portfolio to showcase my development work and resume.</p></center>
        </div>
        
        <div className="project-card"><center>
        <img src={productimage} alt="About Me" className="about-image" />
          <h3>Knot&Love Shopping Website</h3>
          <p>A full-stack  web app to sell, deliver, and shop embroidery products.</p>
          <p><a href="https://knot-love-embroidery.vercel.app/" style={{ color: 'cyan',  }} >Tap here to visit live website</a></p></center>
        </div>
        <div className="project-card"><center>
        <img src={cafeImage} alt="About Me" className="about-image" />
          <h3>Bhojonise cafe Website</h3>
          <p>A full-stack app to sell, deliver, and shop food.</p>
          <p><a href="http://bhojonisecafe.shop/"style={{ color: 'cyan' }}>
          Tap here to visit live website
          </a></p></center>
        </div>
      </div>
    </section>
  );
}
