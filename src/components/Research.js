import React from 'react';
import './Research.css';

function Research() {
  const projects = [
    {
      title: 'Privacy-Preserving Deep Learning',
      description: 'Designing secure training and inference pipelines to protect sensitive data and model integrity.'
    },
    {
      title: 'DeepFake Analysis',
      description: 'Developing detection and attribution techniques to counter synthetic media misuse.'
    },
    {
      title: 'Adversarial Machine Learning',
      description: 'Studying robustness, threat modeling, and defenses against adversarial attacks.'
    }
  ];

  return (
    <section id="research">
      <h2>Research Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
