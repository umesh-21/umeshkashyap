import React from 'react';
import { FaBook, FaFilePdf, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './Publications.css';

function Publications() {
  const [filter, setFilter] = React.useState('all');

  const publications = [
    {
      category: 'conf',
      title: 'The Cosine Conspiracy: Subverting CLIPure-Cos with a LatentSpace Informed Attack',
      authors: 'Umesh Kashyap, Raghav Borikar, Sudev Kumar Padhi, Sk. Subidh Ali',
      venue: 'Security, Privacy, and Applied Cryptography Engineering'
      
    },
    {
      category: 'conf',
      title: 'Doc-Protector: A Self-Healing Approach for Digital Documents',
      authors: 'Sudev Kumar Padhi, Archana Tiwari, Umesh Kashyap, Sk. Subidh Ali',
      venue: 'The 20th International Conference on Document Analysis and Recognition (ICDAR 2025)',
      link: 'https://link.springer.com/article/10.1007/s41635-026-00186-0'
    },
    {
      category: 'journal',
      title: 'Generalize Adversarial Malware Detection',
      authors: 'Umesh Kashyap, Ashish Vishwakarma, Sk. Subidh Ali',
      venue: 'Journal of Hardwareand Systems Security',
      link: 'https://link.springer.com/article/10.1007/s41635-026-00186-0'
    },

    {
      category: 'conf',
      title: 'Perceptually-Guided Adversarial Diffusion: Enhancing Visual Fidelity in Facial Privacy',
      authors: 'Saurabh Nevase, Umesh Kashyap, Sk. Subidh Ali',
      venue: 'International Conference on Computer Vision & Image Processing (CVIP 2025)'
    },

    {
      category: 'conf',
      title: 'GAN-Invert: Unveiling Vulnerabilities in Privacy-Preserving Facial Transformations',
      authors: 'Umesh Kashyap, Sk. Subidh Ali',
      venue: 'Privacy Enhancing Technologies Symposium (PETs 2026) Issue 2',
      link: 'https://doi.org/10.56553/popets-2026-0037'
    },
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

  const getCategoryLabel = (category) => {
    if (category === 'conf') return 'Conference';
    if (category === 'journal') return 'Journal';
    if (category === 'preprint') return 'Preprint';
    return category;
  };

  const renderAuthors = (authors) => {
    const name = 'Umesh Kashyap';
    const parts = authors.split(name);
    if (parts.length === 1) return authors;
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        {part}
        {i < parts.length - 1 && <b style={{color: 'var(--accent-color)'}}>{name}</b>}
      </React.Fragment>
    ));
  };

  return (
    <section id="publications">
      <h2><FaBook /> Publications</h2>
      
      <div className="filter-wrapper">
        <div className="filter-buttons">
          {['all', 'conf', 'journal', 'preprint'].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All' : getCategoryLabel(cat)}
            </button>
          ))}
        </div>
      </div>

      <div className="pub-list">
        {filteredPublications.map((pub, index) => (
          <div className="pub-item" key={index}>
            <div className="pub-tag">{getCategoryLabel(pub.category)}</div>
            <div className="pub-content">
              <h3 className="pub-title">
                <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
              </h3>
              <div className="pub-authors">{renderAuthors(pub.authors)}</div>
              <div className="pub-venue">{pub.venue}</div>
              <div className="pub-actions">
                <a href={pub.link} className="pub-link" target="_blank" rel="noopener noreferrer">
                  <FaArrowUpRightFromSquare /> DOI
                </a>
                {pub.pdf && (
                  <a href={pub.pdf} className="pub-link" target="_blank" rel="noopener noreferrer">
                    <FaFilePdf /> PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publications;
