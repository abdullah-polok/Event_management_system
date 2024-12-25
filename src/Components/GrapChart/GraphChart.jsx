import React, { useContext, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Rectangle,
  CartesianGrid,
} from "recharts";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Legend, Tooltip } from "chart.js";

const GraphChart = () => {
  const { eventData, user, feedbackCounter } = useContext(AuthContext);

  const filteredEvent = eventData.filter(
    (event) => event.email === user?.email
  );

  const filteredGraphData = feedbackCounter.filter((counter) =>
    filteredEvent.some((event) => counter.name === event.name)
  );

  return (
    <div>
      <ResponsiveContainer width="75%" height={500}>
        <BarChart
          width={500}
          height={300}
          data={filteredGraphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            allowDecimals={false} // Prevent non-integer values
            tickFormatter={(tick) => Math.round(tick)} // Format ticks to integers
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="feedbackCount"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphChart;

{
  /* <BarChart data={filteredGraphData}>
        <XAxis dataKey="name" />
        <YAxis
          dataKey="feedbackCount"
          allowDecimals={false} // Prevent non-integer values
          tickFormatter={(tick) => Math.round(tick)} // Format ticks to integers
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="feedbackCount" fill="#8884d8" />
        <Line type="monotone" dataKey="feedbackCount" stroke="#ff7300" />
      </BarChart> */
}
