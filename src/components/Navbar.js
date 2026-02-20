import React from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'publications', label: 'Publications' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <nav id="navbar">
      <a className="logo" href="#about">UK</a>
      
      <div className="nav-controls">
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
