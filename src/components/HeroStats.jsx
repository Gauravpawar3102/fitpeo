import React from 'react';
import BarChartStats from '../Charts/BarChartStats';

function HeroStats({ data }) {
  return (
    <div className="flex justify-between gap-8 p-4 flex-wrap">
      <DashDataComponent data={data}></DashDataComponent>
      <DashDataComponent data={data}></DashDataComponent>
      <DashDataComponent data={data}></DashDataComponent>
    </div>
  );
}

const DashDataComponent = ({ data }) => {
  console.log(data[0].percent);
  return (
    <div className="stats-container flex justify-around ">
      <div className="stats-left-container flex gap-8 bg-white  shadow-lg px-6 py-4 rounded-lg justify-center">
        <div className="text-container">
          <div className="active-users-heading capitalize font-semibold text-xs">
            {data[0].title}
          </div>
          <div className="active-users-percentage items-center p-1">
            +{data[0].percent}
          </div>
          <div className="active-users-number text-2xl font-bold">
            {Number(data[0].totalNumber).toLocaleString()}
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
