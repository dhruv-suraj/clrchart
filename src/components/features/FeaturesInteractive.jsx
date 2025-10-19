import React, { useState, useEffect, useRef } from 'react';
import './FeaturesInteractive.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeaturesInteractive = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(0);
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const statsRef = useRef(null);
  const comparisonRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [comparisonAnimated, setComparisonAnimated] = useState(false);

  const tabs = [
    { id: 0, name: 'Connect', },
    { id: 1, name: 'Decode' },
    { id: 2, name: 'Empower' },
  ];

  const features = [
    {
      tab: 0,
      description: 'Bring your story together effortlessly. We handle record requests securely so you never have to chase them down',
      details: ['Secure Access', 'Fast Retrieval', 'Zero Hassle']
    },
    {
      tab: 0,
      description: 'Your records flow directly from hospitals, clinics, and labs into one clear timeline.',
      details: ['Unified Records', 'Verified Sources', 'Real-Time Updates']
    },
    {
      tab: 0,
      description: 'Every document is organized automatically, ready for you to view anytime.',
      details: ['Smart Sorting', 'Instant Access', 'Peace of Mind']
    },
    {
      tab: 1,
      description: 'Clari translates complex medical language into plain, easy-to-read summaries.',
      details: ['Plain Language', 'Accurate Translation', 'Easy Clarity']
    },
    {
      tab: 1,
      description: 'Key findings and diagnoses are highlighted so you know what truly matters.',
      details: ['HIghlights', 'Insights', 'Understanding']
    },
    {
      tab: 1,
      description: 'View trends across visits, labs, and imaging to see the bigger health picture.',
      details: ['Trend Mapping', 'Data Visualization', 'Clarity Over Time']
    },
    {
      tab: 2,
      description: 'Understand, ask, and act with confidence. Use your insights to prepare smarter questions before every appointment.',
      details: ['Confidence', 'Preparation', 'Connection']
    },
    {
      tab: 2,
      description: 'Track your progress and symptoms to stay proactive about your care.',
      details: ['Progress Tracking', 'Self Awareness', 'Engagement']
    },
    {
      tab: 2,
      description: 'Receive new insights automatically as fresh records arrive.',
      details: ['Continuous Updates', 'Proactive Guidance', 'Personalized Care']
    }
  ];

  const stats = [
    { number: 50000, suffix: '+', label: 'Active Users', duration: 2000 },
    { number: 98, suffix: '%', label: 'Accuracy Rate', duration: 1500 },
    { number: 2, suffix: 'M+', label: 'Reports Analyzed', duration: 2500 },
    { number: 24, suffix: '/7', label: 'Support Available', duration: 1000 }
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = stat.duration;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setAnimatedStats(prev => {
                  const newStats = [...prev];
                  newStats[index] = end;
                  return newStats;
                });
                clearInterval(timer);
              } else {
                setAnimatedStats(prev => {
                  const newStats = [...prev];
                  newStats[index] = Math.floor(start);
                  return newStats;
                });
              }
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !comparisonAnimated) {
          setComparisonAnimated(true);
          setTimeout(() => {
            setSliderPosition(100);
          }, 500);
        } else if (!entry.isIntersecting && comparisonAnimated) {
          setSliderPosition(0);
          setComparisonAnimated(false);
        }
      },
      { threshold: 0.3 }
    );

    if (comparisonRef.current) {
      observer.observe(comparisonRef.current);
    }

    return () => observer.disconnect();
  }, [comparisonAnimated]);

  const currentFeatures = features.filter(f => f.tab === activeTab);

  return (
    <section className="features-interactive" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="interactive-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Header Section */}
      <div className="interactive-header">
        <h2 className="interactive-title">
          Everything you need to
          <span className="gradient-text-animated"> Connect, Decode, and Empower</span>
        </h2>
        <p className="interactive-subtitle">
          Discover the tools and technologies that make ClearChartAI the most comprehensive health data platform
        </p>
      </div>

      {/* Tabbed Navigation */}
      <div className="feature-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`feature-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-name">{tab.name}</span>
          </button>
        ))}
        <div
          className="tab-indicator"
          style={{ transform: `translateX(calc(${activeTab * 100}% + ${activeTab * 0.5}rem))` }}
        />
      </div>

      {/* Interactive Feature Cards */}
      <div className="feature-cards-grid">
        {currentFeatures.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${hoveredCard === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-glow"></div>
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-description">{feature.description}</p>
            <ul className="card-details">
              {feature.details.map((detail, idx) => (
                <li key={idx}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Interactive Comparison Slider */}
      <div className="comparison-section" ref={comparisonRef}>
        <h3 className="comparison-title">See the difference</h3>
        <p className="comparison-subtitle">Before and after using ClearChartAI</p>

        <div
          className="comparison-slider"
          onMouseEnter={() => comparisonAnimated && setSliderPosition(0)}
          onMouseLeave={() => comparisonAnimated && setSliderPosition(100)}
        >
          <div className="comparison-side before">
            <div className="comparison-content">
              <h4>Before</h4>
              <ul>
                <li>Scattered medical records</li>
                <li>Confusing medical jargon</li>
                <li>Manual data tracking</li>
                <li>Limited health insights</li>
              </ul>
            </div>
          </div>

          <div
            className="comparison-side after"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              transition: 'clip-path 0.8s ease-in-out'
            }}
          >
            <div className="comparison-content">
              <h4>After</h4>
              <ul>
                <li>Unified health dashboard</li>
                <li>Plain language explanations</li>
                <li>Automated data integration</li>
                <li>AI-powered insights</li>
              </ul>
            </div>
          </div>

          <div
            className="slider-handle"
            style={{
              left: `${sliderPosition}%`,
              transition: 'left 0.8s ease-in-out'
            }}
          >
            <div className="handle-line"></div>
            <div className="handle-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FeaturesInteractive;
