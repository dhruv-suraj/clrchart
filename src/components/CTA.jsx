import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ctaImage from '../assets/ChatGPT Image Oct 4, 2025, 05_05_03 PM.png';

const CTA = () => {
  const contentRef = useScrollAnimation({ threshold: 0.2 });
  const visualRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="cta-section">
      <div className="cta-content fade-in-up" ref={contentRef}>
        <h2 className="cta-title">Ready to understand your health?</h2>
        <p className="cta-description">Join our early access program and start decoding your medical records today</p>
        <div className="cta-buttons">
          <button className="btn-try-free">Try for Free</button>
          <Link to="/contact" className="btn-contact">Contact us</Link>
        </div>
      </div>

      <div className="cta-visual scale-in" ref={visualRef}>
        <img src={ctaImage} alt="Health visualization" />
      </div>
    </section>
  );
};

export default CTA;
