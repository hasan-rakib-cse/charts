import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const mixBarChartData = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 800 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 6666 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2222},
    { name: "Page D", uv: 2780, pv: 3908, amt: 3500 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 500 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 7500 }
];

export default function App() {
  return (
    <div className="mixBarChart" style={{marginBottom: '20px'}}>
        <h4>Mix Bar Chart</h4>
        <BarChart width={400} height={330} data={mixBarChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
    </div>
  );
}