import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
const EachEvent = ({ eachevent }) => {
  const { email, name, starttime, endtime, location, eventType, imageLink } =
    eachevent;

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-10">
      <figure>
        <img className="w-56 h-64" src={imageLink} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#447af4] font-bold">{name}</h2>
        <h2 className="text-base">Event type: {eventType}</h2>
        <div className="mt-4 text-sm">
          <p>Start Time: {starttime}</p>
          <p>End time: {endtime}</p>
        </div>
        <div className="flex items-center gap-2 mt-6 text-sm">
          <FaMapLocationDot className="text-[#447af4]" /> {location}
        </div>
      </div>
    </div>
  );
};

export default EachEvent;
