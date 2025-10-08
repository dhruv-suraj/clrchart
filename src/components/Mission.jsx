import React from 'react';
import './Mission.css';
import missionImage from '../assets/ChatGPT Image Oct 4, 2025, 04_37_47 PM.png';

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-header">
          <p className="mission-label">Mission</p>
          <h2 className="mission-title">Built by clinicians for patients</h2>
          <p className="mission-description">
            Founded by a healthcare professional who understands the complexity of medical records. Our goal is to empower patients with clear, actionable health information.
          </p>
          <div className="mission-links">
            <a href="#" className="link-about">About us</a>
            <a href="#" className="link-story">
              Our story <span>→</span>
            </a>
          </div>
        </div>

        <div className="mission-image">
          <img
            src={missionImage}
            alt="Doctor consulting with patient"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
