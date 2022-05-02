import React from 'react';
import { Bar, BarChart, Tooltip } from 'recharts';
const bdata = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];
function BarChartStats() {
  return (
    <div className="BarChart ">
      <BarChart width={70} height={40} data={bdata}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" />
        <YAxis /> */}
        <Tooltip />
        <Bar dataKey="uv" fill="#00b4d8" />
      </BarChart>
    </div>
  );
}

export default BarChartStats;
