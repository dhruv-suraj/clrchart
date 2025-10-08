import React from 'react';
import './AboutTimeline.css';

const AboutTimeline = () => {
  return (
    <section className="about-timeline">
      <div className="timeline-header">
        <div className="timeline-years">
          <div className="timeline-year active">2025</div>
          <div className="timeline-year">2026</div>
          <div className="timeline-year">2027</div>
          <div className="timeline-year">2028</div>
          <div className="timeline-year">2029</div>
        </div>
        <div className="timeline-line">
          <div className="timeline-progress"></div>
        </div>
      </div>

      <div className="timeline-content">
        <div className="timeline-text">
          <h2 className="timeline-title">2025</h2>
          <h3 className="timeline-subtitle">Founding the vision of patient-centered health technology</h3>
          <p className="timeline-description">
            Born from clinical insights, we assembled a team driven to solve medical record complexity. Our first prototype emerged from real healthcare challenges.
          </p>
          <div className="timeline-actions">
            <button className="btn-timeline">Read</button>
            <a href="#" className="link-timeline">
              More <span>→</span>
            </a>
          </div>
        </div>

        <div className="timeline-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
            alt="Team collaboration meeting"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
