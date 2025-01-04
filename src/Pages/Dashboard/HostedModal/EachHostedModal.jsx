import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const EachHostedModal = ({ event }) => {
  const {
    eventRegisterData,
    setChartData,
    chartData,
    participant,
    feedbackData,
  } = useContext(AuthContext);

  const { name, starttime, endtime, id } = event;

  const eventIDFilter = feedbackData.filter(
    (event) => event.eventIdFeed === id
  );
  console.log(eventIDFilter);
  const partiIDFilter = participant.filter((event) => event.eventId === id);

  return (
    <div>
      <div className="bg-[#ffffff49]  p-4 rounded-lg mt-2 overflow-y-auto">
        <h3 className="font-bold text-base">{name}</h3>
        <p className="py-1 text-sm">
          {starttime} - {endtime}
        </p>
        <p className="text-sm">Number of feedbacks: {eventIDFilter.length}</p>
        <p className="text-sm">
          Number of participants: {partiIDFilter.length}
        </p>
      </div>
    </div>
  );
};

export default EachHostedModal;
