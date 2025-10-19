import React from 'react';
import ScrollGatherHero from '../components/about/ScrollGatherHero';
import AboutTeam from '../components/about/AboutTeam';
import AboutTimeline from '../components/about/AboutTimeline';
import AboutPartners from '../components/about/AboutPartners';
import AboutImpact from '../components/about/AboutImpact';
import AboutFAQ from '../components/about/AboutFAQ';
import CTA from '../components/CTA';

const AboutUs = () => {
  console.log('AboutUs rendering...');

  return (
    <div style={{ minHeight: '100vh' }}>
      <ScrollGatherHero />
      <AboutTimeline />
      <AboutTeam />
      <AboutPartners />
      <AboutImpact />
      <AboutFAQ />
      <CTA />
    </div>
  );
};

export default AboutUs;
