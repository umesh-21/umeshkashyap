import React from 'react';
import './Publications.css';

function Publications() {
  const [filter, setFilter] = React.useState('all');

  const publications = [
    {
      category: 'preprint',
      title: 'Generalized deepfake attribution',
      authors: 'Sowdagar Mahammad Shahid, Sudev Kumar Padhi, Umesh Kashyap, Sk Subidh Ali',
      venue: 'arXiv preprint arXiv:2406.18278 (2024)',
      link: 'https://arxiv.org/abs/2406.18278',
      pdf: 'https://arxiv.org/pdf/2406.18278'
    },
    {
      category: 'journal',
      title: 'Is Perceptual Encryption Secure? A Security Benchmark for Perceptual Encryption Methods',
      authors: 'Umesh Kashyap, Sudev Kumar Padhi, Sk Subidh Ali',
      venue: 'IEEE Transactions on Artificial Intelligence (2025)',
      link: 'https://ieeexplore.ieee.org/abstract/document/10974570'
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
      title: 'De-Fake: Style based Anomaly Deepfake Detection',
      authors: 'Sudev Kumar Padhi, Harshit Kumar, Umesh Kashyap, Sk Subidh Ali',
      venue: 'arXiv preprint arXiv:2507.03334 (2025)',
      link: 'https://arxiv.org/abs/2507.03334',
      pdf: 'https://arxiv.org/pdf/2507.03334'
    }
  ];

  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === filter);

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
            {pub.authors}
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
