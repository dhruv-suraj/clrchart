import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowWeHelp from '../components/HowWeHelp';
import Benefits from '../components/Benefits';
import Mission from '../components/Mission';
import Impact from '../components/Impact';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowWeHelp />
      <Benefits />
      <Mission />
      <Impact />
      <CTA />
    </>
  );
};

export default Home;
