import React from 'react';
import { FaRobot, FaMicrochip, FaCode, FaToolbox, FaBrain } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Generative AI & LLMs',
      icon: <FaRobot />,
      skills: [
        'OpenAI GPT', 'Claude', 'Gemini', 'LangChain', 
        'Prompt Engineering', 'Fine-Tuning', 'Agentic Workflows', 
        'Multimodal AI', 'Hugging Face Transformers'
      ]
    },
    {
      title: 'ML Frameworks',
      icon: <FaMicrochip />,
      skills: [
        'TensorFlow', 'PyTorch', 'Keras', 
        'Scikit-learn', 'NumPy', 'Pandas', 'Seaborn', 
        'OpenCV', 'NLTK', 'BeautifulSoup'
      ]
    },
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: ['Python', 'C', 'C++', 'LaTeX']
    },
    {
      title: 'Tools',
      icon: <FaToolbox />,
      skills: [
        'Git', 'VS Code', 'Anaconda', 'Google Colab', 
        'GitHub Copilot', 'AI Coding IDEs'
      ]
    }
  ];

  return (
    <section id="skills">
      <h2><FaBrain /> Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skills-card" key={index}>
            <div className="skills-card-header">
              <div className="skills-card-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-badges">
              {category.skills.map((skill, idx) => (
                <span className="skill-pill" key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
