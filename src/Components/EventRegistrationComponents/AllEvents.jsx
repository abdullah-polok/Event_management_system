import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachEventDetail from "./EachEventDetail";

const AllEvents = () => {
  const { eventData } = useContext(AuthContext);
  // console.log(eventData);
  // Sorting by month
  const sortedEvent = eventData.sort((a, b) => {
    const monthA = new Date(a.starttime).getMonth(); // Extract month (0-11)
    const monthB = new Date(b.starttime).getMonth(); // Extract month (0-11)
    return monthA - monthB; // Compare months
  });
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center">
      {sortedEvent.map((event) => (
        <EachEventDetail event={event} key={event.id} />
      ))}
    </div>
  );
};

export default AllEvents;
