import React from 'react';

function HeroStats() {
  return (
    <div className="flex justify-around">
      <DashDataComponent></DashDataComponent>
      <DashDataComponent></DashDataComponent>
      <DashDataComponent></DashDataComponent>
    </div>
  );
}

const DashDataComponent = () => {
  return (
    <div className="stats-container flex justify-around">
      <div className="stats-left-container flex gap-8 bg-gray-200">
        <div className="text-container">
          <div className="active-users-heading">Total Active Users</div>
          <div className="active-users-percentage">+2.6%</div>
          <div className="active-users-number">18,765</div>
        </div>
        <div className="graph-container items-center  h-full">graph</div>
      </div>
    </div>
  );
};

export default HeroStats;
