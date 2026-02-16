import React from 'react';
import './Publications.css';

function Publications() {
  const [filter, setFilter] = React.useState('all');

  const publications = [
    {
      category: 'conf',
      title: 'Gradient-Guided Adversarial Patch Attack for Deep Neural Networks',
      authors: 'Rishav Kumar, Umesh Kashyap, Sk. Subidh Ali',
      venue: 'Security, Privacy, and Applied Cryptography Engineering, 227–245 (2026)',
      link: 'https://link.springer.com/chapter/10.1007/978-3-032-16342-4_13'
    },
    {
      category: 'journal',
      title: 'Is Perceptual Encryption Secure? A Security Benchmark for Perceptual Encryption Methods',
      authors: 'Umesh Kashyap, Sudev Kumar Padhi, Sk Subidh Ali',
      venue: 'IEEE Transactions on Artificial Intelligence (2025)',
      link: 'https://ieeexplore.ieee.org/abstract/document/10974570'
    },
    {
      category: 'preprint',
      title: 'De-Fake: Style based Anomaly Deepfake Detection',
      authors: 'Sudev Kumar Padhi, Harshit Kumar, Umesh Kashyap, Sk Subidh Ali',
      venue: 'arXiv preprint arXiv:2507.03334 (2025)',
      link: 'https://arxiv.org/abs/2507.03334',
      pdf: 'https://arxiv.org/pdf/2507.03334'
    },
    {
      category: 'conf',
      title: 'Adversarial Malware Detection',
      authors: 'Ashish Vishwakarma, Umesh Kashyap, Sk Subidh Ali',
      venue: 'International Conference on Security, Privacy, and Applied Cryptography Engineering, 277–286 (2024)',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-80408-3_17'
    },
    {
      category: 'preprint',
      title: 'Generalized deepfake attribution',
      authors: 'Sowdagar Mahammad Shahid, Sudev Kumar Padhi, Umesh Kashyap, Sk Subidh Ali',
      venue: 'arXiv preprint arXiv:2406.18278 (2024)',
      link: 'https://arxiv.org/abs/2406.18278',
      pdf: 'https://arxiv.org/pdf/2406.18278'
    }
  ];

  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === filter);

  // Helper function to bold "Umesh Kashyap" in author string
  const renderAuthors = (authors) => {
    const name = 'Umesh Kashyap';
    const parts = authors.split(name);
    if (parts.length === 1) {
      return authors;
    }
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        {part}
        {i < parts.length - 1 && <strong>{name}</strong>}
      </React.Fragment>
    ));
  };

  return (
    <section id="publications">
      <h2>Publications</h2>
      
      <div className="filter-buttons">
        {['all', 'conf', 'journal', 'preprint'].map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="publications-list">
        {filteredPublications.map((pub, index) => (
          <div className="publication" key={index}>
            <strong>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>
            </strong>
            <br />
            {renderAuthors(pub.authors)}
            <br />
            {pub.venue}
            {pub.pdf && (
              <>
                {' '}
                [<a href={pub.pdf} target="_blank" rel="noopener noreferrer">PDF</a>]
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publications;
