import React, { useContext, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Colors } from "chart.js";

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

  const colors = ["#FFBB28", "#00C49F", "red", "#FF8042", "pink", "#0088FE"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        width={500}
        height={300}
        data={filteredGraphData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="feedbackCount"
          fill="#8884"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {filteredGraphData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
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
