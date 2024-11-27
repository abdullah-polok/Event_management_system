import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachEventDetail from "./EachEventDetail";

const AllEvents = () => {
  const { eventData } = useContext(AuthContext);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center overflow-y-hidden">
      {eventData.map((event) => (
        <EachEventDetail event={event} key={event.id} />
      ))}
    </div>
  );
};

export default AllEvents;
