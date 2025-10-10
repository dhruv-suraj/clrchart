import React from 'react';
import './AboutProcess.css';

const AboutProcess = () => {
  return (
    <section className="about-process">
      <div className="process-header">

        <h2 className="process-title">How your medical records become clear</h2>
        <p className="process-subtitle">Transforming complex health data into simple, actionable insights</p>
      </div>

      <div className="process-cards">
        <div className="process-card process-card-teal">
          <div className="process-card-content">
            <h3 className="process-card-title">Pull records with precision</h3>
            <p className="process-card-description">
              Securely connect medical information from multiple healthcare sources in one place
            </p>
            <div className="process-card-actions">
              <button className="btn-card-action">Connect</button>
              <a href="#" className="link-card-action">
                Watch <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="process-card process-card-gray">
          <div className="process-card-content">
            <h3 className="process-card-title">Translate with intelligence</h3>
            <p className="process-card-description">
              Advanced AI breaks down medical language into straightforward, patient-friendly explanations
            </p>
            <div className="process-card-actions">
              <button className="btn-card-action">Understand</button>
              <a href="#" className="link-card-action">
                Explore <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
