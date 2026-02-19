import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Research from './components/Research';
import Skills from './components/Skills';
import Publications from './components/Publications';
import CV from './components/CV';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="App">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Research />
        <Experience />
        <Achievements />
        <Skills />
        <Publications />
        <CV />
      </main>
      <Footer />
    </div>
  );
}

export default App;
