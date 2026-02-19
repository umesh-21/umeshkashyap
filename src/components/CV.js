import React from 'react';
import { FaFileLines, FaFileArrowDown, FaGoogle } from 'react-icons/fa6';
import './CV.css';

function CV() {
  return (
    <section id="cv">
      <h2><FaFileLines /> Curriculum Vitae</h2>
      <div className="cv-container">
        <div className="cv-icon-box">
          <FaFileLines />
        </div>
        <div className="cv-info">
          <p className="cv-text">
            My CV details my academic background, research publications, teaching experience, and technical skills.
          </p>
          <div className="cv-actions">
            <a className="btn btn-primary" href="#" aria-label="Download CV PDF">
              <FaFileArrowDown /> Download PDF
            </a>
            <a className="btn btn-outline" href="https://scholar.google.com/citations?user=pragXJsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <FaGoogle /> Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
