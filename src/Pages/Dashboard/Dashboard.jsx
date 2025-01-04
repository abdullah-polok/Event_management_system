import React, { useContext } from "react";
import DashboardCard from "../../Components/DashBoardComponents/DashboardCard";
import GraphChart from "../../Components/GrapChart/GraphChart";
import LinegraphChart from "../../Components/GrapChart/LinegraphChart";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { eventData, user, partiCounter, feedbackCounter } =
    useContext(AuthContext);

  const filteredEvent = eventData.filter(
    (event) => event.email === user?.email
  );

  const filteredGraphDataParti = partiCounter.filter((counter) =>
    filteredEvent.some((event) => counter.name === event.name)
  );
  console.log(filteredGraphDataParti.length);
  return (
    <div>
      <DashboardCard></DashboardCard>

      {filteredGraphDataParti.length > 0 ? (
        filteredGraphDataParti.length > 0 && (
          <>
            <div className="text-center mt-10 border-b-4 border-blue-300">
              <h1 className="font-semibold text-center mb-2 text-lg">
                Organizer's Event Insights
              </h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
              <div className="mt-10 flex-auto">
                <div className=" m-4">
                  <h1 className="text-base font-semibold text-center mb-2">
                    Event Feedback Overview
                  </h1>
                </div>
                <div className="mt-8">
                  <GraphChart></GraphChart>
                </div>
              </div>
              <div className="mt-10 flex-auto">
                <div className=" mx-4">
                  <h1 className="text-base font-semibold text-center mb-2">
                    Event participants Overview
                  </h1>
                </div>
                <div className="mt-8">
                  <LinegraphChart></LinegraphChart>
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
