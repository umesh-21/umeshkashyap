import React from 'react';
import { 
  FaEnvelope, 
  FaGoogle, 
  FaGithub, 
  FaLinkedin, 
  FaLocationDot, 
  FaBuildingColumns,
  FaShieldHalved,
  FaMaskFace,
  FaBrain
} from 'react-icons/fa6';
import './Hero.css';

function Hero() {
  const tags = [
    { icon: <FaShieldHalved />, text: 'Privacy-Preserving AI' },
    { icon: <FaMaskFace />, text: 'DeepFake Analysis' },
    { icon: <FaBrain />, text: 'Adversarial ML' }
  ];

  return (
    <section className="hero" id="about">
      <div className="hero-grid">
        <div className="hero-profile">
          <div className="profile-card">
            <img 
              className="profile-image" 
              src={`${process.env.PUBLIC_URL}/umesh_profile.jpg`} 
              alt="Umesh Kashyap" 
            />
          </div>
        </div>
        
        <div className="hero-content">
          <header className="hero-header">
            <h1 className="hero-name">Umesh Kashyap</h1>
            <h3 className="hero-subtitle">PhD Scholar, Computer Science & Engineering</h3>
          </header>
          
          <div className="hero-bio">
            <p>
              I am a <b>PhD Scholar</b> at the Indian Institute of Technology Bhilai, 
              working under the mentorship of <a href="https://scholar.google.com/citations?user=BdDCoeEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Sk. Subidh Ali</a>.
              My research focuses on building <b>secure, robust, and privacy-preserving</b> intelligent systems.
            </p>
            <p>
              I hold an MSc in Computer Science from Atal Bihari Vajpayee University (2020) 
              and a BSc from E. Raghvendra Rao P.G. Science College (2018).
            </p>
          </div>

          <div className="info-list">
            <div className="info-item">
              <FaBuildingColumns />
              <span>IIT Bhilai, India</span>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <span>umeshk@iitbhilai.ac.in</span>
            </div>
            <div className="info-item">
              <FaLocationDot />
              <span>Durg, Chhattisgarh</span>
            </div>
          </div>

          <div className="hero-social">
            <a href="https://scholar.google.com/citations?user=pragXJsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar">
              <FaGoogle />
            </a>
            <a href="https://github.com/umesh-21" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/umesh-kashyap-491744172/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>

          <div className="hero-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag-pill">
                {tag.icon}
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
