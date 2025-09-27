import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ExpertsBacked } from '../components/ExpertsBacked';
import { AllServices } from '../components/AllServices';
import { SecurityInsights } from '../components/SecurityInsights';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Hero />
      <WhyChooseUs />
      <ExpertsBacked />
      <Services />
      <AllServices />
      <SecurityInsights />
      <Contact />
    </div>
  );
};