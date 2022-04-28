import React from 'react';
import Hero from './Hero';
import HeroStats from './HeroStats';
import Navbar from './Navbar';

function Main() {
  return (
    <div className="Main w-full h-full">
      <Navbar />
      <Hero />
      <HeroStats />
    </div>
  );
}

export default Main;
