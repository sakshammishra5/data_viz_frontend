import React, { useContext } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import { AppContext } from '../context/AppContext';
const LineChartComponent = () => {
    const {  chartData} = useContext(AppContext)

  
    return (
       <ResponsiveContainer width={"100%"} height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Line type="linear" dataKey="A" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="linear" dataKey="B" stroke="#82ca9d" />
            <Line type="linear" dataKey="C" stroke="red" />
            <Line type="linear" dataKey="D" stroke="grey" />
            <Line type="linear" dataKey="E" stroke="black" />
          </LineChart>
        </ResponsiveContainer>
      );
}

export default LineChartComponent
