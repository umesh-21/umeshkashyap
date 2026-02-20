import React from 'react';
import { FaFileLines, FaFileArrowDown, FaGoogle } from 'react-icons/fa6';
import './Resume.css';

function Resume() {
  return (
    <section id="resume">
      <h2><FaFileLines /> Resume</h2>
      <div className="resume-container">
        <div className="resume-icon-box">
          <FaFileLines />
        </div>
        <div className="resume-info">
          <p className="resume-text">
            My resume details my academic background, research publications, teaching experience, and technical skills.
          </p>
          <div className="resume-actions">
            <a className="btn btn-primary" href="/umesh_resume.pdf" download="Umesh_Kashyap_Resume.pdf" aria-label="Download Resume PDF">
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

export default Resume;
