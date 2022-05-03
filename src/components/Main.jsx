import React from 'react';
import Hero from './Hero';
import HeroGraph from './HeroGraph';
import HeroStats from './HeroStats';
import Navbar from './Navbar';

import Links from './Links';

function Main() {
  return (
    <div className="Main w-full p-2 h-full border-l-2 border-grey-200">
      <Navbar />
      <Hero />
      <HeroStats />
      <HeroGraph />
      <Links />
    </div>
  );
}

export default Main;
