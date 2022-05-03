import React from 'react';
import BarChartStats from '../Charts/BarChartStats';

function HeroStats() {
  return (
    <div className="flex justify-between gap-8 p-4 flex-wrap">
      <DashDataComponent></DashDataComponent>
      <DashDataComponent></DashDataComponent>
      <DashDataComponent></DashDataComponent>
    </div>
  );
}

const DashDataComponent = () => {
  console.log();
  return (
    <div className="stats-container flex justify-around ">
      <div className="stats-left-container flex gap-8 bg-white  shadow-lg px-6 py-4 rounded-lg justify-center">
        <div className="text-container">
          <div className="active-users-heading capitalize font-semibold text-xs">
            {'Total Active Users'}
          </div>
          <div className="active-users-percentage items-center p-1">
            +{'2.6%'}
          </div>
          <div className="active-users-number text-2xl font-bold">
            {Number('18786').toLocaleString()}
          </div>
        </div>
        <div className="graph-container  items-center h-full flex">
          <BarChartStats />
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
