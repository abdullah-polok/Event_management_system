import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachEventDetail from "./EachEventDetail";

const AllEvents = () => {
  const { eventData } = useContext(AuthContext);
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center">
      {eventData.map((event) => (
        <EachEventDetail event={event} key={event.id} />
      ))}
    </div>
  );
};

export default AllEvents;
