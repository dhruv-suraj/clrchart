import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollGatherHero.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollGatherHero = () => {
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const nextSectionRef = useRef(null);
  const logoRef = useRef(null);

  // Healthcare-related floating items
  const floatingItems = [
    { text: 'Patient Care', position: { x: -35, y: -25 } },
    { text: 'Medical Records', position: { x: 35, y: -25 } },
    { text: 'Health Insights', position: { x: -45, y: 0 } },
    { text: 'Diagnostics', position: { x: 45, y: 0 } },
    { text: 'Analytics', position: { x: -35, y: 25 } },
    { text: 'Reports', position: { x: 35, y: 25 } },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const heroContent = heroContentRef.current;
    const nextSection = nextSectionRef.current;
    const logo = logoRef.current;
    const items = container.querySelectorAll('.floating-item');

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Part 1: Gather items to center (0 to 0.4)
    tl.to(items, {
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      stagger: 0.02,
    }, 0);

    // Pulse the logo as items arrive (0.3 to 0.5)
    tl.to(logo, {
      scale: 1.15,
      duration: 0.1,
      ease: 'power2.out',
    }, 0.3);

    tl.to(logo, {
      scale: 1,
      duration: 0.1,
      ease: 'power2.in',
    }, 0.4);

    // Part 2: Start radial wipe transition (0.5 to 1)
    tl.to(nextSection, {
      clipPath: 'circle(150% at 50% 50%)',
      duration: 0.5,
      ease: 'power2.inOut',
    }, 0.5);

    // Fade out hero content during wipe (0.5 to 0.7)
    tl.to(heroContent, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.inOut',
    }, 0.5);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-gather-container">
      {/* Hero section with EKG background and floating items */}
      <div ref={heroContentRef} className="scroll-gather-hero">
        {/* EKG Background */}
        <div className="ekg-background">
          <svg className="ekg-svg ekg-svg-1" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path
              d="M0,50 L200,50 L220,30 L240,70 L260,20 L280,80 L300,50 L1200,50"
              fill="none"
              stroke="url(#ekgGrad1)"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="ekgGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#667eea" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#667eea" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="ekg-svg ekg-svg-2" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path
              d="M0,50 L180,50 L200,25 L220,75 L240,15 L260,85 L280,50 L1200,50"
              fill="none"
              stroke="url(#ekgGrad2)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="ekgGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#764ba2" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#764ba2" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#764ba2" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Central Logo/Text */}
        <div ref={logoRef} className="central-logo">
          <div className="mission-badge">
            <span className="badge-dot"></span>
            <span>Our Mission</span>
          </div>
          <h1 className="main-title">
            Decode your <span className="gradient-text">health</span>
          </h1>
          <p className="main-subtitle">
            Transforming complex medical records into clear, actionable insights
          </p>
        </div>

        {/* Floating items that will gather to center */}
        {floatingItems.map((item, index) => (
          <div
            key={index}
            className="floating-item"
            style={{
              left: `calc(50% + ${item.position.x}vw)`,
              top: `calc(50% + ${item.position.y}vh)`,
            }}
          >
            <div className="floating-item-inner">
              <div className="item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="item-text">{item.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Next section revealed by radial wipe */}
      <div ref={nextSectionRef} className="radial-wipe-section">
        <div className="wipe-content">
          <h2 className="wipe-title">Transforming healthcare for everyone</h2>
          <p className="wipe-subtitle">
            Empowering health decisions through clear, actionable insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollGatherHero;
