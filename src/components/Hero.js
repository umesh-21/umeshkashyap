import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-image">
          <img className="profile-image" src={`${process.env.PUBLIC_URL}/umesh_profile.jpg`} alt="Profile photo of Umesh Kashyap" />
        </div>
        <div className="hero-text">
          <h1>Umesh Kashyap</h1>
          <h3>PhD Scholar, Computer Science and Engineering Department</h3>
          <p>Indian Institute of Technology Bhilai, Durg (C.G) 491002.</p>
          <p>
            I am a PhD Scholar in the Computer Science and Engineering Department at IIT Bhilai under the supervision of{' '}
            <a href="https://scholar.google.com/citations?user=BdDCoeEAAAAJ&hl=en" 
              target="_blank" rel="noopener noreferrer"
              style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: '700' }}>
              Dr. Sk. Subidh Ali
            </a>.
            I completed my BSc in Computer Science from E. Raghvendra Rao P.G. Science College, Bilaspur (C.G.) in 2018 and MSc in Computer Science from Atal Bihari Vajpayee University, Bilaspur (C.G.) in 2020.
          </p>
          <p>
            My research interests include privacy-preserving deep learning, DeepFake analysis, and adversarial machine learning.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
