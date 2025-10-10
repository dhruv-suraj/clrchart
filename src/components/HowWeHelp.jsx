import React from 'react';
import './HowWeHelp.css';
import secureImage from '../assets/ChatGPT Image Oct 4, 2025, 02_46_18 PM.png';
import smartImage from '../assets/ChatGPT Image Oct 4, 2025, 03_02_33 PM.png';
import intuitiveImage from '../assets/ChatGPT Image Oct 4, 2025, 03_17_22 PM.png';

const HowWeHelp = () => {
  return (
    <section className="how-we-help-section">
      <div className="how-we-help-header">
        <p className="section-label">Features</p>
        <h2 className="section-title">How we help you</h2>
        <p className="section-subtitle">Powerful tools to make your medical information accessible</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-image">
            <img src={secureImage} alt="Woman reading on tablet" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Unified medical records</h3>
            <p className="feature-description">Seamlessly pull data from hospitals and clinics</p>
            <a href="#" className="feature-link">
              Explore <span>→</span>
            </a>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src={smartImage} alt="Doctor presenting tablet" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">AI-powered explanations</h3>
            <p className="feature-description">Translate complex medical terminology into clear language</p>
            <a href="#" className="feature-link">
              Discover <span>→</span>
            </a>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src={intuitiveImage} alt="Woman with laptop" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Answers you can understand</h3>
            <p className="feature-description">Ask direct questions about your health and get precise answers that you can understand</p>
            <a href="#" className="feature-link">
              Try now <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
