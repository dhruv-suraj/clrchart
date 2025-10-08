import React from 'react';
import './Benefits.css';
import benefitsImage from '../assets/ChatGPT Image Oct 4, 2025, 04_21_19 PM.png';

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-left">
          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L20 12L28 12L22 18L24 26L16 20L8 26L10 18L4 12L12 12L16 4Z" fill="#000"/>
              </svg>
            </div>
            <div className="benefit-text">
              <h3 className="benefit-title">Better communication</h3>
              <p className="benefit-description">Understand your medical records with clarity and confidence</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="20" height="20" rx="4" stroke="#000" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="16" r="5" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M16 11V16L19 19" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="benefit-text">
              <h3 className="benefit-title">Stronger engagement</h3>
              <p className="benefit-description">Take an active role in managing your personal health journey</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="6" width="16" height="20" rx="2" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M12 12H20M12 16H18M12 20H16" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="22" r="6" fill="#000"/>
                <path d="M18 22L19.5 23.5L22 21" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="benefit-text">
              <h3 className="benefit-title">Improved outcomes</h3>
              <p className="benefit-description">Make informed decisions with comprehensive and understandable medical information</p>
            </div>
          </div>

          <div className="benefits-actions">
            <button className="btn-get-started">Get started</button>
            <a href="#" className="link-learn-more">
              Learn more <span>→</span>
            </a>
          </div>
        </div>

        <div className="benefits-right">
          <img
            src={benefitsImage}
            alt="Grandmother with grandchildren"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
