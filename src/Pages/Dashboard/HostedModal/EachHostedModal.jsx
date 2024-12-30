import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const EachHostedModal = ({ event }) => {
  const { eventRegisterData, setChartData, chartData, participant } =
    useContext(AuthContext);

  const { name, starttime, endtime, id } = event;

  const eventIDFilter = eventRegisterData.filter(
    (event) => event.eventId === id
  );
  const partiIDFilter = participant.filter((event) => event.eventId === id);

  // const eve
  // ///check predata exist into the charData state or not
  // useEffect(() => {
  //   setChartData((predata) => {
  //     const newCharData = chartInfo.filter((newItem) => {
  //       return !predata.some((existItem) => existItem.name === newItem.name);
  //     });

  //     return [...predata, ...chartInfo];
  //   });
  // }, []);
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
