import React from 'react';
import './all.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline-container">
        <div className="line" />

        {/* 2021 - Left */}
        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <span className="year">2020</span>
          <div className="timeline-content">
            <h3>High School</h3>
            <p>Tamralipta Public School.</p>
            <p>I.C.S.E Percentage  69%</p>
          </div>
          
        </div>

        {/* 2022 - Right */}
        <div className="timeline-item right">
          <div className="timeline-dot"></div>
          <span className="year">2022</span>
          <div className="timeline-content">
            <h3>Higher Secondary</h3>
            <p>Zilla Public School</p>
            <p>C.B.S.E Percentage  66%</p>
          </div>
          
        </div>

        {/* 2025 - Left */}
        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <span className="year">2025</span>
          <div className="timeline-content">
            <h3>Graduation</h3>
            <p>Parul University</p>
            <p>BCA (Full Stack  Web Development)  6.88 CGPA</p>
          </div>
          
        </div>
        {/* 2025 - Left */}
        <div className="timeline-item right">
          <div className="timeline-dot"></div>
          <span className="year">2025</span>
          <div className="timeline-content">
            <h3>Internship</h3>
            <p>Consultancy Center unit/FITCS department Parul University</p>
            <p>Bhojonise Cafe (Food Delevery Web App)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
