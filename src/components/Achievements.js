import React from 'react';
import { FaTrophy, FaAward, FaMedal, FaCertificate } from 'react-icons/fa6';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      title: 'Qualified UGC-NET (6 Times)',
      subtitle: 'National Qualification',
      description: 'Cleared the National Eligibility Test conducted by National Testing Agency six times between 2019 and 2025, demonstrating sustained research and academic competency at the national level.',
      icon: <FaAward />
    },
    {
      title: 'TIH PhD Fellowship',
      subtitle: 'Research Fellowship (Dec 2023 – May 2025)',
      description: 'Awarded the Technology Innovation Hub (TIH) PhD Fellowship for research on AI-driven GST fraud detection at Indian Institute of Technology Bhilai.',
      icon: <FaMedal />
    },
    {
      title: 'Awarded NFOBC Fellowship (2023 & Dec 2024)',
      subtitle: 'Scholarship',
      description: 'Received the National Fellowship for Other Backward Classes (NFOBC) through University Grants Commission based on UGC-NET merit, awarded twice for doctoral research support.',
      icon: <FaMedal />
    },
    {
      title: 'Qualified CG-SET (2019)',
      subtitle: 'State-Level Qualification',
      description: 'Successfully qualified the Chhattisgarh State Eligibility Test conducted by Chhattisgarh Professional Examination Board.',
      icon: <FaCertificate />
    }
  ];

  return (
    <section id="achievements">
      <h2><FaTrophy /> Achievements & Awards</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">{item.icon}</div>
            <div className="achievement-info">
              <span className="achievement-subtitle">{item.subtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
