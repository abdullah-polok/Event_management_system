import React from "react";
import { useLocation } from "react-router-dom";
import EachRegisteredDetails from "../../Pages/Dashboard/RegisteredModal/EachRegisteredDetails";
import EachHostedEventDetails from "./EachHostedEventDetails";

const MyHostedEvent = () => {
  const locations = useLocation();
  const eventHostedFilter = locations.state.eventHosted;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center overflow-y-auto">
      {eventHostedFilter.map((event, index) => (
        <EachHostedEventDetails
          event={event}
          key={index}
        ></EachHostedEventDetails>
      ))}
    </div>
  );
};

export default MyHostedEvent;
