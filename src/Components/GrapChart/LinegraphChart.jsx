import React, { useContext } from "react";
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
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LinegraphChart = () => {
  const { user, eventData, partiCounter } = useContext(AuthContext);

  const filteredEvent = eventData.filter(
    (event) => event.email === user?.email
  );
  const filteredGraphData = partiCounter.filter((counter) =>
    filteredEvent.some((event) => counter.name === event.name)
  );
  return (
    <div className="w-full h-[500px]">
      <ResponsiveContainer width="75%" height="100%">
        <LineChart
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
          <Line
            type="monotone"
            dataKey="Partipants_Count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinegraphChart;
