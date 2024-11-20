import React from "react";
import DashboardCard from "../../Components/DashBoardComponents/DashboardCard";
import GraphChart from "../../Components/GrapChart/GraphChart";

const Dashboard = () => {
  return (
    <div>
      <DashboardCard></DashboardCard>
      <div className="mt-36 flex justify-center">
        <GraphChart></GraphChart>
      </div>
    </div>
  );
};

export default Dashboard;
