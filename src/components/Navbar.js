import React from 'react';
import './Navbar.css';

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar">
      <div className="logo">Umesh Kashyap</div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#research" onClick={() => setMenuOpen(false)}>Research</a></li>
        <li><a href="#publications" onClick={() => setMenuOpen(false)}>Publications</a></li>
        <li><a href="#cv" onClick={() => setMenuOpen(false)}>CV</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
      <button className="theme-toggle" onClick={toggleDarkMode} title="Toggle dark mode">
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}

export default Navbar;
