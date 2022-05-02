import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import LineChartStats from '../Charts/LineChartStats';
function HeroGraph() {
  const chartdata = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
    {
      name: 'Group D',
      value: 200,
    },
    {
      name: 'Group E',
      value: 278,
    },
    {
      name: 'Group F',
      value: 189,
    },
  ];

  return (
    <div className="heroGraph-container w-full p-4 flex gap-4">
      <div className="currentDownload-bar-graph  flex bg-white  shadow-lg flex-col p-4 rounded-lg gap-8 w-1/3 items-center">
        <div className="currentDownload-text self-start font-semibold  text-md ">
          Current Download
        </div>
        <div className="circular-graph  grow ">
          <PieChart width={250} height={250}>
            <Pie
              data={chartdata}
              dataKey="value"
              outerRadius={120}
              innerRadius={110}
              fill="lightgreen"
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
      <div className="areaInstalled-graph-container w-full  rounded-xl p-4 bg-white drop-shadow-lg flex flex-col justify-between items-center">
        <div className="areaInstalledContainer w-full flex  justify-between     ">
          <div className="areaInstalled-text capitalize font-semibold ">
            Area Installed
          </div>
          <select className="areaInstalled-text  font-bold  text-sm bg-slate-100">
            <option value="actual value 1">2019</option>
            <option value="actual value 2">2020</option>
            <option value="actual value 3">2021</option>
            <option value="actual value 3">2022</option>
          </select>
        </div>
        <LineChartStats />
      </div>
    </div>
  );
}

export default HeroGraph;
