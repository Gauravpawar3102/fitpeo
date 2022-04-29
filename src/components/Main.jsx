import React from 'react';
import Hero from './Hero';
import HeroGraph from './HeroGraph';
import HeroStats from './HeroStats';
import Navbar from './Navbar';

function Main() {
  return (
    <div className="Main w-full h-full">
      <Navbar />
      <Hero />
      <HeroStats />
      <HeroGraph />
    </div>
  );
}

export default Main;
