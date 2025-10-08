import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutProcess from '../components/about/AboutProcess';
import AboutTeam from '../components/about/AboutTeam';
import AboutTimeline from '../components/about/AboutTimeline';
import AboutPartners from '../components/about/AboutPartners';
import AboutImpact from '../components/about/AboutImpact';
import AboutFAQ from '../components/about/AboutFAQ';
import CTA from '../components/CTA';

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutProcess />
      <AboutTeam />
      <AboutTimeline />
      <AboutPartners />
      <AboutImpact />
      <AboutFAQ />
      <CTA />
    </>
  );
};

export default AboutUs;
