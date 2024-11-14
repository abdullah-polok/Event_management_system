import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
const EachEvent = ({ eachevent }) => {
  const { email, name, starttime, endtime, location, eventType, imageLink } =
    eachevent;

  ///call date object
  const startDate = new Date(starttime);
  const endDate = new Date(endtime);

  ///creat time format template
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  ///format the time
  const formatedStartDate = startDate.toLocaleString("en-US", options);
  const formatedEndDate = endDate.toLocaleString("en-US", options);

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-10">
      <figure>
        <img className="w-56 h-64" src={imageLink} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#447af4] font-bold">{name}</h2>
        <h2 className="text-base">Event type: {eventType}</h2>
        <div className="mt-4 text-sm">
          <p>Start Time: {formatedStartDate}</p>
          <p>End time: {formatedEndDate}</p>
        </div>
        <div className="flex items-center gap-2 mt-6 text-sm">
          <FaMapLocationDot /> {location}
        </div>
      </div>
    </div>
  );
};

export default EachEvent;
