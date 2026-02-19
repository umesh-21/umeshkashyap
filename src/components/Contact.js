import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaGoogle, FaLocationDot } from 'react-icons/fa6';
import './Contact.css';

function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'umeshk@iitbhilai.ac.in',
      href: 'mailto:umeshk@iitbhilai.ac.in',
      icon: <FaEnvelope />
    },
    {
      label: 'LinkedIn',
      value: 'Connect professionally',
      href: 'https://www.linkedin.com/in/umesh-kashyap-491744172/',
      icon: <FaLinkedinIn />
    },
    {
      label: 'GitHub',
      value: 'View code & projects',
      href: 'https://github.com/umesh-21',
      icon: <FaGithub />
    },
    {
      label: 'Google Scholar',
      value: 'Read publications',
      href: 'https://scholar.google.com/citations?user=pragXJsAAAAJ&hl=en',
      icon: <FaGoogle />
    }
  ];

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="contact-subtitle"><FaLocationDot /> Indian Institute of Technology Bhilai, Durg, Chhattisgarh, India</p>
      
      <div className="contact-grid">
        {contacts.map((contact) => (
          <a key={contact.label} href={contact.href} className="contact-card" target={contact.href.startsWith('mailto:') ? undefined : '_blank'} rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}>
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-info">
              <strong>{contact.label}</strong>
              <small>{contact.value}</small>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
