import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachEventDetail from "./EachEventDetail";

const AllEvents = () => {
  const { eventData } = useContext(AuthContext);
  return (
    <div className="lg:flex  flex-row-reverse justify-center gap-10 px-10">
      {eventData.map((event) => (
        <EachEventDetail event={event} key={event.id} />
      ))}
    </div>
  );
};

export default AllEvents;
