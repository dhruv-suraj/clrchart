import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Features.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Features = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const leftRef = useScrollAnimation({ threshold: 0.2 });
  const rightRef = useScrollAnimation({ threshold: 0.2 });
  const sectionRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [showAiResponse, setShowAiResponse] = useState(false);
  const [isTypingTriggered, setIsTypingTriggered] = useState(false);
  const fullText = 'Hey Clari, did I have a heart attack?';

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement || isTypingTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTypingTriggered(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, [isTypingTriggered]);

  useEffect(() => {
    if (!isTypingTriggered) return;

    setTypedText('');
    setShowAiResponse(false);

    let currentIndex = 0;
    let responseTimeout;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        responseTimeout = setTimeout(() => setShowAiResponse(true), 500);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
      if (responseTimeout) clearTimeout(responseTimeout);
    };
  }, [fullText, isTypingTriggered]);

  return (
    <section className="features-section" ref={sectionRef}>
      <div className="features-header fade-in-up" ref={headerRef}>
        <h2 className="features-title">Medical records made simple</h2>
        <p className="features-subtitle">Decode complex medical information with AI-powered insights</p>
      </div>

      <div className="features-content">
        <div className="features-left slide-in-left" ref={leftRef}>
          <h3 className="features-heading">
            Understand Your Health.<br />
            Own Your Future.
          </h3>
          <p className="features-description">
            No more guessing about your health. ClearChartAI turns complex reports into answers you can trust and act on.
          </p>
          <Link to="/about" className="btn-learn-more">
            Learn more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="features-right scale-in" ref={rightRef}>
          <div className="chat-container">
            <div className={`chat-message user-message ${typedText ? 'visible' : ''}`}>
              {typedText}
              {typedText.length < fullText.length && <span className="typing-cursor">|</span>}
            </div>
            <div className={`chat-message ai-message ${showAiResponse ? 'visible' : ''}`}>
              <div className="ai-avatar">AI</div>
              <div className="ai-text">
                No, you didn't have a heart attack. Doctors found an 80% blockage and placed a stent to keep blood flowing and to help prevent a future heart attack.
              </div>
            </div>
            <div className="chat-input-container">
              <button className="add-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <input
                type="text"
                className="chat-input"
                placeholder="Ask Clari?"
              />
              <button className="mic-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
