import React from 'react';
import './Benefits.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import benefitsImage from '../assets/ChatGPT Image Oct 4, 2025, 04_21_19 PM.png';

const Benefits = () => {
  const leftRef = useScrollAnimation({ threshold: 0.2 });
  const rightRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-left slide-in-left" ref={leftRef}>
          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6C6.89543 6 6 6.89543 6 8V24C6 25.1046 6.89543 26 8 26H24C25.1046 26 26 25.1046 26 24V8C26 6.89543 25.1046 6 24 6H8Z" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M10 12H22M10 16H22M10 20H18" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="23" cy="23" r="5" fill="#000"/>
                <path d="M21 23L22.5 24.5L25 22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M16 8V16L22 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="22" cy="10" r="4" fill="#000"/>
                <path d="M20.5 10L21.5 11L23.5 9" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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
                <path d="M16 6C16 6 10 8 10 12V17C10 21.4183 13.5817 25 18 25H16C11.5817 25 8 21.4183 8 17V12C8 8 14 6 16 6Z" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M16 6C16 6 22 8 22 12V17C22 21.4183 18.4183 25 14 25H16C20.4183 25 24 21.4183 24 17V12C24 8 18 6 16 6Z" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M12 15L15 18L20 13" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

        <div className="benefits-right slide-in-right" ref={rightRef}>
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
