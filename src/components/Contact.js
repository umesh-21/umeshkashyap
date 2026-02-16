import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:umeshk@iitbhilai.ac.in">Email</a>
        <a href="https://www.linkedin.com/in/umesh-kashyap-491744172/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/umesh-21" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://scholar.google.com/citations?user=pragXJsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
      </div>
    </section>
  );
}

export default Contact;
