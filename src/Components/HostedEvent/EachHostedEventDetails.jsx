import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import cardColor from "../../assets/Images/cardColor.jpg";
import { Link } from "react-router-dom";
import HostedModal from "../../Pages/Dashboard/HostedModal/HostedModal";
import HostedevenQR from "./HostedevenQR";
const EachHostedEventDetails = ({ event }) => {
  const { name, location, starttime, endtime } = event;
  return (
    <div>
      <div
        onClick={() => document.getElementById("my_modal_15").showModal()}
        className="card bg-base-100 image-full w-96 shadow-xl mt-6"
      >
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
      <HostedevenQR></HostedevenQR>
    </div>
  );
};

export default EachHostedEventDetails;
