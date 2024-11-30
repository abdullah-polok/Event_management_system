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
  const { eventRegisterData, eventData, chartData, user, feedbackCounter } =
    useContext(AuthContext);

  // console.log(eventData);

  const filteredEvent = eventData.filter(
    (event) => event.email === user?.email
  );

  const filteredGraphData = feedbackCounter.filter((counter) =>
    filteredEvent.some((event) => counter.name === event.name)
  );

  return (
    <ResponsiveContainer width="75%" height={500}>
      <BarChart data={filteredGraphData}>
        <XAxis dataKey="name" />
        <YAxis
          dataKey="feedbackCount"
          allowDecimals={false} // Prevent non-integer values
          tickFormatter={(tick) => Math.round(tick)} // Format ticks to integers
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="feedbackCount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphChart;
