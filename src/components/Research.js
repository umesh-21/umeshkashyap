import React from 'react';
import { FaShieldHalved, FaMaskFace, FaBrain, FaFlask } from 'react-icons/fa6';
import './Research.css';

function Research() {
  const projects = [
    {
      icon: <FaShieldHalved />,
      title: 'Privacy-Preserving Deep Learning',
      description: 'Designing secure training and inference pipelines to protect sensitive data and model integrity.'
    },
    {
      icon: <FaMaskFace />,
      title: 'DeepFake Analysis',
      description: 'Developing detection and attribution techniques to counter synthetic media misuse.'
    },
    {
      icon: <FaBrain />,
      title: 'Adversarial Machine Learning',
      description: 'Studying robustness, threat modeling, and defenses against adversarial attacks.'
    }
  ];

  return (
    <section id="research">
      <h2><FaFlask /> Research Projects</h2>
      <div className="research-grid">
        {projects.map((project, index) => (
          <div className="research-card" key={index}>
            <div className="research-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
