import React from 'react';
import { FaUserGraduate, FaBuildingColumns, FaBookOpen } from 'react-icons/fa6';
import './Overview.css';

function Overview() {
  const highlights = [
    {
      icon: <FaUserGraduate />,
      title: 'About',
      text: 'PhD Scholar in Computer Science and Engineering at IIT Bhilai, focused on privacy-preserving AI and robust machine learning.'
    },
    {
      icon: <FaBuildingColumns />,
      title: 'Education',
      text: 'MSc in Computer Science (2020), Atal Bihari Vajpayee University and BSc in Computer Science (2018), E. Raghvendra Rao Science College.'
    },
    {
      icon: <FaBookOpen />,
      title: 'Research Focus',
      text: 'DeepFake attribution, adversarial learning, and secure perception for privacy and trust in AI systems.'
    }
  ];

  return (
    <section id="overview">
      <h2>Overview</h2>
      <div className="overview-grid">
        {highlights.map((item) => (
          <article className="overview-card" key={item.title}>
            <div className="overview-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Overview;
