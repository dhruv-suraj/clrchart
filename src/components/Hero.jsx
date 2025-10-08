import React from 'react';
import './Hero.css';
import logo from '../assets/ClearChartAI color.png';

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
          <img src={logo} alt="ClearChartAI" style={{ width: '600px', height: '600px', transform: 'translateY(-50px)' }} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
