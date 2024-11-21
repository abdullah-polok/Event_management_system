import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const EachHostedModal = ({ event }) => {
  const { eventRegisterData, setChartData, chartData } =
    useContext(AuthContext);

  const { name, starttime, endtime, id } = event;

  const eventIDFilter = eventRegisterData.filter(
    (event) => event.eventId === id
  );

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
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="py-1">
          {starttime} - {endtime}
        </p>
        <p>Number of participates: {eventIDFilter.length}</p>
      </div>
    </div>
  );
};

export default EachHostedModal;
