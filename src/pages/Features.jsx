import React from 'react';
import FeaturesHero from '../components/features/FeaturesHero';
import FeaturesUnified from '../components/features/FeaturesUnified';
import FeaturesDecode from '../components/features/FeaturesDecode';
import FeaturesClari from '../components/features/FeaturesClari';
import FeaturesJourney from '../components/features/FeaturesJourney';
import FeaturesDetailed from '../components/features/FeaturesDetailed';
import FeaturesTestimonials from '../components/features/FeaturesTestimonials';
import CTA from '../components/CTA';

const Features = () => {
  return (
    <>
      <FeaturesHero />
      <FeaturesUnified />
      <FeaturesDecode />
      <FeaturesClari />
      <FeaturesJourney />
      <FeaturesDetailed />
      <FeaturesTestimonials />
      <CTA />
    </>
  );
};

export default Features;
