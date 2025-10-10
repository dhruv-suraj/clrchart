import React from 'react';
import './FeaturesJourney.css';

const FeaturesJourney = () => {
  return (
    <section className="features-journey">
      <div className="journey-header">
        <h2 className="journey-title">Your health journey simplified</h2>
        <p className="journey-subtitle">Unlock the power of your medical information</p>
      </div>

      <div className="journey-cards">
        <div className="journey-card journey-card-dark">
          <h3 className="journey-card-title">Connect your medical story</h3>
          <p className="journey-card-description">
            Automate ClearChartAI to retrieve your health data from hospitals, labs, and clinics.
          </p>
          <a href="#" className="journey-card-link">
            Start <span>→</span>
          </a>
        </div>

        <div className="journey-card journey-card-medium">
          <h3 className="journey-card-title">Decode your medical narrative</h3>
          <p className="journey-card-description">
            Our system organizes and explains your data, removing jargon and highlighting key findings.
          </p>
          <a href="#" className="journey-card-link">
            Translate <span>→</span>
          </a>
        </div>

        <div className="journey-card journey-card-light">
          <h3 className="journey-card-title">Empower your health conversations</h3>
          <p className="journey-card-description">
            Ask direct questions. Receive precise, personalized answers
          </p>
          <a href="#" className="journey-card-link">
            Inquire <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesJourney;
