import React from "react";
import EachRegisteredDetails from "./EachRegisteredDetails";
import { useLocation } from "react-router-dom";

const MyRegistered = () => {
  const locations = useLocation();
  const eventRegisteredFilter = locations.state.eventRegisteredFilter;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 justify-items-center overflow-y-auto">
      {eventRegisteredFilter.map((event, index) => (
        <EachRegisteredDetails
          event={event}
          key={index}
        ></EachRegisteredDetails>
      ))}
    </div>
  );
};

export default MyRegistered;
