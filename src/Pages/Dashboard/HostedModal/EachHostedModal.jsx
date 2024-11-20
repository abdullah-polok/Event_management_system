import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const EachHostedModal = ({ event }) => {
  const { eventRegisterData } = useContext(AuthContext);

  const { name, starttime, endtime, id } = event;

  const eventIDFilter = eventRegisterData.filter(
    (event) => event.eventId === id
  );
  //   console.log(name, ":", eventIDFilter.length);
  //   console.log(eventData);
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
