import React from 'react';
import './all.css';
import sampleImage from './sample-image.jpg';


export default function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf'; // path relative to public/
  link.download = 'Pabitra_Pramanik_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  

  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Hi, It's <span className="highlight">Pabitra Pramanik</span></h1>
        <h2>I'm a <span className="highlight">Web Developer</span></h2>
        <p>
          I'm a dedicated Web Developer with a strong passion for building responsive,
          user-friendly, and visually appealing websites.
          Whether it's turning complex problems into simple code or designing layouts 
          that connect with users, My Website works.
        </p>
        <div className="social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
        <div className="hero-buttons">
          <button className="hire-btn" onClick={downloadResume}>Download Resume</button>
          <button className="contact-btn" onClick={handleScrollToContact}>
            Contact
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={sampleImage} alt="Profile" />
      </div>
    </section>
  );
}
