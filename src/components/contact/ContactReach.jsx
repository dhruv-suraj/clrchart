import React from 'react';
import './ContactReach.css';

const ContactReach = () => {
  return (
    <section className="contact-reach">
      <div className="reach-container">
        <div className="reach-text">
          <p className="reach-label">Connect</p>
          <h2 className="reach-title">Reach out</h2>
          <p className="reach-description">
            Direct support for patients seeking clarity in their health journey, powered by human understanding and AI precision.
          </p>
        </div>

        <div className="reach-info">
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="info-icon">
              <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div>
              <p className="info-label">Email</p>
              <p className="info-value">team@clearchartai.io</p>
            </div>
          </div>

          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="info-icon">
              <path d="M6 4C6 2.89543 6.89543 2 8 2H12C13.1046 2 14 2.89543 14 4V16C14 17.1046 13.1046 18 12 18H8C6.89543 18 6 17.1046 6 16V4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="10" cy="15" r="0.5" fill="currentColor"/>
            </svg>
            <div>
              <p className="info-label">Support</p>
            </div>
          </div>

          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="info-icon">
              <path d="M10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M10 18C10 18 15 13 15 9C15 6.23858 12.7614 4 10 4C7.23858 4 5 6.23858 5 9C5 13 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <div>
              <p className="info-label">Location</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reach-visual">
        <svg width="100%" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C9E8E8" />
              <stop offset="100%" stopColor="#7DD3D3" />
            </linearGradient>
            <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B8D8D8" />
              <stop offset="100%" stopColor="#6BC2C2" />
            </linearGradient>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E8F7F7" />
              <stop offset="100%" stopColor="#C9E8E8" />
            </linearGradient>
          </defs>

          <rect width="800" height="400" fill="url(#skyGradient)"/>

          {/* Sun */}
          <circle cx="650" cy="100" r="60" fill="#F7E5C0" opacity="0.8"/>
          <circle cx="650" cy="100" r="50" fill="#FFF5DC" opacity="0.6"/>

          {/* Mountains */}
          <path d="M0 300 L200 100 L400 300 Z" fill="url(#mountainGradient1)" opacity="0.6"/>
          <path d="M300 300 L500 80 L700 300 Z" fill="url(#mountainGradient2)" opacity="0.7"/>
          <path d="M600 300 L800 150 L800 300 Z" fill="url(#mountainGradient1)" opacity="0.5"/>

          {/* Stars/particles */}
          <circle cx="100" cy="80" r="2" fill="white" opacity="0.6"/>
          <circle cx="250" cy="60" r="2" fill="white" opacity="0.6"/>
          <circle cx="400" cy="120" r="2" fill="white" opacity="0.6"/>
          <circle cx="550" cy="90" r="2" fill="white" opacity="0.6"/>
          <circle cx="700" cy="150" r="2" fill="white" opacity="0.6"/>
        </svg>
      </div>
    </section>
  );
};

export default ContactReach;
