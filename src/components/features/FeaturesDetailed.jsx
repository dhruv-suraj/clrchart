import React from 'react';
import './FeaturesDetailed.css';

const FeaturesDetailed = () => {
  const features = [
    {
      number: '01',
      category: 'Patient empowerment',
      title: 'Take charge of your medical information',
      description: 'Understand your health journey with clear, accessible medical insights. No more confusion or complex medical language.',
      image: (
        <img src="/src/assets/ChatGPT Image Oct 4, 2025, 07_38_02 PM.png" alt="Patient Empowerment" width="600" height="640" />
      ),
      buttons: ['Learn more', 'Explore']
    },
    {
      number: '02',
      category: 'Time efficiency',
      title: 'Maximize your healthcare interactions',
      description: 'Prepare better questions for doctors and understand medical recommendations with unprecedented clarity.',
      image: (
        <svg width="400" height="350" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7DD3D3" />
              <stop offset="100%" stopColor="#5FA8A8" />
            </linearGradient>
          </defs>

          <circle cx="200" cy="175" r="100" fill="url(#clockGradient)" opacity="0.3" />
          <circle cx="200" cy="175" r="80" stroke="#FFFFFF" strokeWidth="8" fill="url(#clockGradient)" />

          {/* Clock hands */}
          <line x1="200" y1="175" x2="200" y2="120" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <line x1="200" y1="175" x2="240" y2="210" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

          {/* Clock markers */}
          <circle cx="200" cy="95" r="5" fill="#FFFFFF" />
          <circle cx="280" cy="175" r="5" fill="#FFFFFF" />
          <circle cx="200" cy="255" r="5" fill="#FFFFFF" />
          <circle cx="120" cy="175" r="5" fill="#FFFFFF" />

          {/* Medical symbols */}
          <path d="M320 120 Q330 115, 340 120 L340 140 Q330 145, 320 140 Z" fill="rgba(232, 247, 247, 0.8)" />
          <circle cx="330" cy="130" r="3" fill="#5FC4C4" />

          <rect x="60" y="120" width="30" height="35" rx="3" fill="rgba(232, 247, 247, 0.8)" />
          <circle cx="75" cy="137" r="8" stroke="#5FC4C4" strokeWidth="2" fill="none" />

          <rect x="310" y="240" width="35" height="25" rx="3" fill="rgba(232, 247, 247, 0.8)" />
          <path d="M318 250 L327 250 M318 255 L324 255" stroke="#5FC4C4" strokeWidth="1.5" />

          {/* Speed lines */}
          <path d="M50 80 L90 85 M40 110 L85 115 M35 140 L80 142" stroke="#5FC4C4" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </svg>
      ),
      buttons: ['Discover', 'Connect']
    },
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
                <span className="detail-number">{feature.number}</span>
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
