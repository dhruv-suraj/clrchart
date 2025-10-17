import React, { useState, useEffect, useRef } from 'react';
import './FeaturesInteractive.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeaturesInteractive = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliderDragging, setIsSliderDragging] = useState(false);
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  const tabs = [
    { id: 0, name: 'AI Analysis', icon: '🧠' },
    { id: 1, name: 'Data Security', icon: '🔒' },
    { id: 2, name: 'Integration', icon: '🔗' },
    { id: 3, name: 'Insights', icon: '💡' }
  ];

  const features = [
    {
      tab: 0,
      title: 'Intelligent Report Analysis',
      description: 'AI-powered analysis that transforms complex medical jargon into clear, understandable insights.',
      icon: '🎯',
      details: ['Natural Language Processing', 'Context-aware interpretations', 'Personalized explanations']
    },
    {
      tab: 0,
      title: 'Predictive Health Insights',
      description: 'Get proactive recommendations based on your medical history and current health data.',
      icon: '📊',
      details: ['Trend analysis', 'Early warning system', 'Personalized suggestions']
    },
    {
      tab: 0,
      title: 'Smart Symptom Checker',
      description: 'Understand your symptoms with AI-guided assessments and relevant medical information.',
      icon: '🩺',
      details: ['Symptom matching', 'Severity assessment', 'Doctor preparation']
    },
    {
      tab: 1,
      title: 'End-to-End Encryption',
      description: 'Your data is encrypted at rest and in transit using industry-standard protocols.',
      icon: '🛡️',
      details: ['AES-256 encryption', 'Zero-knowledge architecture', 'Secure data transmission']
    },
    {
      tab: 1,
      title: 'HIPAA Compliance',
      description: 'Built with HIPAA-ready infrastructure to ensure your medical data stays private.',
      icon: '✅',
      details: ['Privacy by design', 'Audit trails', 'Compliance reporting']
    },
    {
      tab: 1,
      title: 'Access Control',
      description: 'You control who sees your data with granular permission settings.',
      icon: '👤',
      details: ['Role-based access', 'Temporary sharing', 'Activity monitoring']
    },
    {
      tab: 2,
      title: 'EHR Integration',
      description: 'Seamlessly connect with major Electronic Health Record systems.',
      icon: '🏥',
      details: ['HL7 FHIR support', 'Real-time sync', 'Multi-provider access']
    },
    {
      tab: 2,
      title: 'Wearable Device Sync',
      description: 'Import data from fitness trackers and health monitoring devices.',
      icon: '⌚',
      details: ['Apple Health', 'Google Fit', 'Smart device integration']
    },
    {
      tab: 2,
      title: 'Lab Results Import',
      description: 'Automatically import and interpret lab results from various providers.',
      icon: '🔬',
      details: ['PDF parsing', 'Data extraction', 'Trend tracking']
    },
    {
      tab: 3,
      title: 'Visual Health Timeline',
      description: 'See your health journey visualized with interactive charts and timelines.',
      icon: '📈',
      details: ['Interactive graphs', 'Historical trends', 'Milestone tracking']
    },
    {
      tab: 3,
      title: 'Personalized Dashboards',
      description: 'Customize your view with widgets that matter most to your health.',
      icon: '📱',
      details: ['Drag-and-drop layout', 'Custom metrics', 'Quick actions']
    },
    {
      tab: 3,
      title: 'Smart Notifications',
      description: 'Get timely reminders for medications, appointments, and health checks.',
      icon: '🔔',
      details: ['Smart scheduling', 'Priority alerts', 'Multi-channel delivery']
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

  const handleSliderMove = (e) => {
    if (!isSliderDragging) return;
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

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
        <span className="interactive-badge">✨ Powerful Features</span>
        <h2 className="interactive-title">
          Everything you need to
          <span className="gradient-text-animated"> master your health</span>
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
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-name">{tab.name}</span>
          </button>
        ))}
        <div
          className="tab-indicator"
          style={{ transform: `translateX(${activeTab * 100}%)` }}
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
            <div className="card-icon">
              <span className="icon-emoji">{feature.icon}</span>
            </div>
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
            <div className="card-footer">
              <button className="btn-card-action">
                Explore
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Statistics */}
      <div className="stats-showcase" ref={statsRef}>
        <h3 className="stats-title">Trusted by thousands worldwide</h3>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">
                {animatedStats[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{
                    width: statsAnimated ? '100%' : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Comparison Slider */}
      <div className="comparison-section">
        <h3 className="comparison-title">See the difference</h3>
        <p className="comparison-subtitle">Before and after using ClearChartAI</p>

        <div
          className="comparison-slider"
          onMouseMove={handleSliderMove}
          onMouseDown={() => setIsSliderDragging(true)}
          onMouseUp={() => setIsSliderDragging(false)}
          onMouseLeave={() => setIsSliderDragging(false)}
        >
          <div className="comparison-side before">
            <div className="comparison-content">
              <h4>Before</h4>
              <ul>
                <li>❌ Scattered medical records</li>
                <li>❌ Confusing medical jargon</li>
                <li>❌ Manual data tracking</li>
                <li>❌ Limited health insights</li>
              </ul>
            </div>
          </div>

          <div
            className="comparison-side after"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="comparison-content">
              <h4>After</h4>
              <ul>
                <li>✅ Unified health dashboard</li>
                <li>✅ Plain language explanations</li>
                <li>✅ Automated data integration</li>
                <li>✅ AI-powered insights</li>
              </ul>
            </div>
          </div>

          <div
            className="slider-handle"
            style={{ left: `${sliderPosition}%` }}
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

      {/* CTA Section */}
      <div className="interactive-cta">
        <h3>Ready to transform your health data?</h3>
        <p>Join thousands of users who have taken control of their medical information</p>
        <div className="cta-buttons">
          <button className="btn-primary-cta">
            Get Started Free
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-secondary-cta">
            Watch Demo
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L14 10L8 15V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesInteractive;
