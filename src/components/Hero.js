import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Umesh Kashyap</h1>
          <h3>PhD Scholar, Computer Science and Engineering Department</h3>
          <p>Indian Institute of Technology Bhilai, Durg (C.G) 491002.</p>
          <p>
            I am a PhD Scholar in the Computer Science and Engineering Department at IIT Bhilai under the supervision of{' '}
            <a href="https://scholar.google.com/citations?user=BdDCoeEAAAAJ&hl=en" 
               target="_blank" rel="noopener noreferrer"
               style={{ background: '#FFD700', color: '#222', padding: '2px 6px', borderRadius: '3px', textDecoration: 'none', fontWeight: '500' }}>
              Dr. Sk. Subidh Ali
            </a>.
            I completed my BSc in CSE from E Raghvendra Rao Science College, Bilaspur (C.G.) in 2018 and my MSc in CSE from Atal Bihari Bajpayee University, Bilaspur (C.G.) in 2020.
          </p>
          <p>
            My research interests include privacy-preserving deep learning, DeepFake analysis, and adversarial machine learning.
          </p>
        </div>
        <div className="hero-image">
          <img className="profile-image" src={`${process.env.PUBLIC_URL}/umesh_profile.jpg`} alt="Profile photo of Umesh Kashyap" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
