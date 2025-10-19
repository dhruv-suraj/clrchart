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

    // Stage 1: Move cards toward center while visible (0 to 0.4)
    items.forEach((item, index) => {
      const isTopRow = index < 2;
      const isBottomRow = index > 3;
      const isLeftSide = index === 0 || index === 2 || index === 4;

      tl.to(item, {
        x: isLeftSide ? '30vw' : '-30vw',
        y: isTopRow ? '20vh' : (isBottomRow ? '-20vh' : 0),
        scale: 0.7,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut',
      }, index * 0.03);
    });

    // Stage 2: Funnel all cards to center (0.4 to 0.7)
    tl.to(items, {
      x: 0,
      y: 0,
      scale: 0.3,
      opacity: 0.6,
      duration: 0.3,
      ease: 'power2.in',
      stagger: {
        amount: 0.15,
        from: 'edges'
      },
    }, 0.4);

    // Stage 3: Disappear into title (0.7 to 0.9)
    tl.to(items, {
      scale: 0,
      opacity: 0,
      duration: 0.2,
      ease: 'power3.in',
      stagger: {
        amount: 0.1,
        from: 'edges'
      },
    }, 0.7);

    // Pulse the logo as items arrive (0.6 to 0.8)
    tl.to(logo, {
      scale: 1.2,
      duration: 0.1,
      ease: 'power2.out',
    }, 0.6);

    tl.to(logo, {
      scale: 1,
      duration: 0.1,
      ease: 'elastic.out(1, 0.5)',
    }, 0.7);

    // Part 2: Start radial wipe transition (0.9 to 1.3)
    tl.to(nextSection, {
      clipPath: 'circle(150% at 50% 50%)',
      duration: 0.4,
      ease: 'power2.inOut',
    }, 0.9);

    // Fade out hero content during wipe (0.9 to 1.1)
    tl.to(heroContent, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.inOut',
    }, 0.9);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-gather-container">
      {/* Hero section with floating items */}
      <div ref={heroContentRef} className="scroll-gather-hero">
        {/* Central Logo/Text */}
        <div ref={logoRef} className="central-logo">
          {/* <div className="mission-badge">
            <span className="badge-dot"></span>
            <span>Our Mission</span>
          </div> */}
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
