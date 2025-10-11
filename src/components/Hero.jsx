import React from 'react';
import './Hero.css';
import logoVideo from '../assets/EKG logo.mp4';

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Clarity in Complexity</h1>
          <p className="hero-subtitle">
            Your records, unified and simplified. Clear explanations, real understanding, no medical degree needed.
          </p>
          <button className="btn-secondary">Try Now</button>
        </div>
        <div className="hero-image">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '800px', height: '800px', transform: 'translateY(-50px)' }}
          >
            <source src={logoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
};

export default Hero;
