import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2 className="features-title">Medical records made simple</h2>
        <p className="features-subtitle">Decode complex medical information with AI-powered insights</p>
      </div>

      <div className="features-content">
        <div className="features-left">
          <h3 className="features-heading">
            Understand Your Health.<br />
            Own Your Future.
          </h3>
          <p className="features-description">
            No more guessing about your health. ClearChartAI turns complex reports into answers you can trust and act on.
          </p>
          <button className="btn-learn-more">Learn more</button>
        </div>

        <div className="features-right">
          <div className="chat-container">
            <div className="chat-message user-message">
              Hey Clari, did I have a heart attack?
            </div>
            <div className="chat-message ai-message">
              No, you didn't have a heart attack. Doctors found an 80% blockage and placed a stent to keep blood flowing and to help prevent a future heart attack.
            </div>
            <div className="chat-input-container">
              <button className="add-btn">+</button>
              <input
                type="text"
                className="chat-input"
                placeholder="Ask Clari?"
              />
              <button className="mic-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13C11.6569 13 13 11.6569 13 10V5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5V10C7 11.6569 8.34315 13 10 13Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
