import React from 'react';
import './FeaturesDetailed.css';

const FeaturesDetailed = () => {
  const features = [
    {
      number: '03',
      category: 'Privacy protection',
      title: 'Your medical data remains completely confidential',
      description: 'Built with HIPAA-ready infrastructure and advanced de-identification tools to protect your personal health information.',
      image: (
        <svg width="400" height="350" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7DD3D3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5FA8A8" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Shield */}
          <path d="M200 80 L270 110 L270 180 Q270 230, 200 280 Q130 230, 130 180 L130 110 Z"
                fill="url(#shieldGradient)" stroke="#7DD3D3" strokeWidth="4" />

          {/* Lock */}
          <rect x="180" y="170" width="40" height="50" rx="5" fill="#FFFFFF" opacity="0.9" />
          <path d="M185 170 L185 155 Q185 140, 200 140 Q215 140, 215 155 L215 170"
                stroke="#5FC4C4" strokeWidth="4" fill="none" />
          <circle cx="200" cy="195" r="6" fill="#5FC4C4" />
          <line x1="200" y1="201" x2="200" y2="210" stroke="#5FC4C4" strokeWidth="3" />

          {/* Data lines */}
          <path d="M140 120 L100 100 M140 140 L95 130 M140 160 L100 155"
                stroke="#7DD3D3" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
          <path d="M260 120 L300 100 M260 140 L305 130 M260 160 L300 155"
                stroke="#7DD3D3" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />

          {/* Encryption symbols */}
          <circle cx="90" cy="100" r="15" fill="rgba(232, 247, 247, 0.9)" />
          <text x="83" y="107" fontSize="14" fontWeight="bold" fill="#5FC4C4">01</text>

          <circle cx="310" cy="100" r="15" fill="rgba(232, 247, 247, 0.9)" />
          <text x="303" y="107" fontSize="14" fontWeight="bold" fill="#5FC4C4">10</text>

          <rect x="75" y="145" width="30" height="25" rx="3" fill="rgba(232, 247, 247, 0.9)" />
          <path d="M80 153 L85 158 L95 148" stroke="#5FC4C4" strokeWidth="2" fill="none" />
        </svg>
      ),
      buttons: ['Learn more', 'Explore']
    }
  ];

  return (
    <section className="features-detailed">
      {features.map((feature, index) => (
        <div key={index} className={`detail-section ${index % 2 === 0 ? 'detail-normal' : 'detail-reverse'}`}>
          <div className="detail-container">
            <div className="detail-text">
              <div className="detail-meta">
                <span className="detail-category">{feature.category}</span>
              </div>
              <h2 className="detail-title">{feature.title}</h2>
              <p className="detail-description">{feature.description}</p>
            </div>

            <div className="detail-visual">
              <div className="detail-image-container">
                {feature.image}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesDetailed;
