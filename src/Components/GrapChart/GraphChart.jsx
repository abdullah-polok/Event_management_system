import React, { useContext, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const GraphChart = () => {
  const { eventRegisterData, eventData, chartData } = useContext(AuthContext);

  console.log(eventData);
  return (
    <ResponsiveContainer width="75%" height={500}>
      <BarChart data={eventData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="starttime" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Event name" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphChart;
