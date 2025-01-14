import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
const EachEvent = ({ eachevent }) => {
  const { email, name, starttime, endtime, location, eventType, imageLink } =
    eachevent;

  return (
    <div className="card card-side  mt-10 overflow-y-hidden overflow-hidden image-full xl:w-96 lg:w-96  shadow-xl">
      <figure className="w-full h-56">
        <img src={imageLink} />
      </figure>
      <div className="card-body mb-4">
        <h2 className="card-title text-white font-bold text-base">{name}</h2>
        <h2 className="text-base">Event type: {eventType}</h2>
        <div className="mt-2 text-sm">
          <p>Start Time: {starttime}</p>
          <p>End time: {endtime}</p>
        </div>
        <div className="flex items-center gap-2 mt-2 text-sm ">
          <FaMapLocationDot className="text-[#447af4]" /> {location}
        </div>
      </div>
    </div>
  );
};

export default EachEvent;
