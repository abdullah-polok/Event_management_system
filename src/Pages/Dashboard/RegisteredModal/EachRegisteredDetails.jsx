import React from "react";
import EachEventDetail from "../../../Components/EventRegistrationComponents/EachEventDetail";
import { FaLocationDot } from "react-icons/fa6";
import cardColor from "../../../assets/Images/cardColor.jpg";
import { Link } from "react-router-dom";
const EachRegisteredDetails = ({ event }) => {
  const { name, location, starttime, endtime } = event;
  return (
    <div>
      <Link to="/registered_event" state={{ event }}>
        <div className="card bg-base-100 image-full xl:w-96 lg:w-96  shadow-xl mt-6">
          <figure>
            <img src={cardColor} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>

            <p className="text-sm">
              {starttime} - {endtime}
            </p>
            <p className="flex items-center text-sm gap-1">
              <FaLocationDot className="text-white" /> {location}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EachRegisteredDetails;
