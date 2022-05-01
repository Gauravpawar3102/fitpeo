import React from 'react';

function HeroStats({ data }) {
  return (
    <div className="flex justify-around">
      <DashDataComponent data={data}></DashDataComponent>
      <DashDataComponent data={data}></DashDataComponent>
      <DashDataComponent data={data}></DashDataComponent>
    </div>
  );
}

const DashDataComponent = ({ data }) => {
  console.log(data[0].percent);
  return (
    <div className="stats-container flex justify-around">
      <div className="stats-left-container flex gap-8 bg-gray-200">
        <div className="text-container">
          <div className="active-users-heading">{data[0].title}</div>
          <div className="active-users-percentage">{data[0].percent}</div>
          <div className="active-users-number">{data[0].totalNumber}</div>
        </div>
        <div className="graph-container items-center  h-full">graph</div>
      </div>
    </div>
  );
};

export default HeroStats;
