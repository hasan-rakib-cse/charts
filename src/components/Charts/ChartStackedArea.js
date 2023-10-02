import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const stackedAreaChartData = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 800 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 6666 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2222},
    { name: "Page D", uv: 2780, pv: 3908, amt: 3500 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 500 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 7500 }
];

const ChartStackedArea = () => {
  return (
    <div className="lineChart" style={{marginBottom: '20px'}}>
        <h4>Stacked Area Chart</h4>
        <AreaChart width={400} height={330} data={stackedAreaChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
    </div>
  )
}

export default ChartStackedArea