import React from 'react';
import { FaBriefcase, FaBuilding, FaCalendarDays, FaLocationDot } from 'react-icons/fa6';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      role: 'PhD Fellow',
      organization: 'IIT Bhilai Innovation and Technology Foundation (IBITF)',
      location: 'Bhilai, India',
      duration: 'Dec 2023 – May 2025',
      description: 'Worked on the project “Detection of Financial Frauds in GST Using Deep Learning Model.” Developed a hybrid Deep Learning and Graph Neural Network (GNN) framework for large-scale GST fraud detection. Designed feature engineering pipelines, graph-based taxpayer relationship modeling, and temporal behavior analysis to handle highly imbalanced financial datasets. Built scalable AI solutions aimed at real-world fraud monitoring and automated tax compliance systems.'
    },
    {
      role: 'Project Scientist',
      organization: 'Indian Institute of Technology Delhi (IIT Delhi)',
      location: 'New Delhi, India',
      duration: 'Jan 2023 – Dec 2023',
      description: 'Worked on the project “Next Generation Wireless Research and Standardization on 5G and Beyond.” Contributed to research in advanced wireless communication systems, performance evaluation of 5G technologies, and next-generation network standardization. Supported experimental validation, system modeling, and technical documentation under the Department of Electrical Engineering.'
    },
    {
      role: 'Guest Faculty (Computer Science)',
      organization: 'Atal Bihari Vajpayee University',
      location: 'Bilaspur, India',
      duration: '2020 – 2022',
      description: 'Delivered undergraduate and postgraduate courses in Machine Learning, Data Structures, and Programming. Mentored student projects, supervised dissertations, and contributed to curriculum development and academic evaluation.'
    }
  ];

  return (
    <section id="experience">
      <h2><FaBriefcase /> Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="exp-sidebar">
              <div className="exp-dot"></div>
              <div className="exp-line"></div>
            </div>
            <div className="exp-content">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-duration"><FaCalendarDays /> {exp.duration}</span>
              </div>
              <div className="exp-sub-header">
                <span className="exp-org"><FaBuilding /> {exp.organization}</span>
                <span className="exp-location"><FaLocationDot /> {exp.location}</span>
              </div>
              <p className="exp-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
