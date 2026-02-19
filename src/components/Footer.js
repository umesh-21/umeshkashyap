import React from 'react';
import { FaLinkedinIn, FaGithub, FaGoogle, FaEnvelope } from 'react-icons/fa6';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/umesh-kashyap-491744172/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://github.com/umesh-21" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://scholar.google.com/citations?user=pragXJsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><FaGoogle /></a>
          <a href="mailto:umeshk@iitbhilai.ac.in" aria-label="Email"><FaEnvelope /></a>
        </div>
        <p className="footer-info">© {new Date().getFullYear()} <b>Umesh Kashyap</b>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
