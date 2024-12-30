import React from "react";
import DashboardCard from "../../Components/DashBoardComponents/DashboardCard";
import GraphChart from "../../Components/GrapChart/GraphChart";
import LinegraphChart from "../../Components/GrapChart/LinegraphChart";

const Dashboard = () => {
  return (
    <div>
      <DashboardCard></DashboardCard>

      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
        <div className="mt-10 flex-auto">
          <div className="border-b-4 mx-4 border-blue-300">
            <h1 className="text-base font-semibold text-center mb-2">
              Event Feedback Overview
            </h1>
          </div>
          <div className="mt-8">
            <GraphChart></GraphChart>
          </div>
        </div>
        <div className="mt-10 flex-auto">
          <div className="border-b-4 mx-4 border-blue-300">
            <h1 className="text-base font-semibold text-center mb-2">
              Event participants Overview
            </h1>
          </div>
          <div className="mt-8">
            <LinegraphChart></LinegraphChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
