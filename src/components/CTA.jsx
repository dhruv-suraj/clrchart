import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';
import ctaImage from '../assets/ChatGPT Image Oct 4, 2025, 05_05_03 PM.png';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Ready to understand your health?</h2>
        <p className="cta-description">Join our early access program and start decoding your medical records today</p>
        <div className="cta-buttons">
          <button className="btn-try-free">Try for Free</button>
          <Link to="/contact" className="btn-contact">Contact us</Link>
        </div>
      </div>

      <div className="cta-visual">
        <img src={ctaImage} alt="Health visualization" />
      </div>
    </section>
  );
};

export default CTA;
