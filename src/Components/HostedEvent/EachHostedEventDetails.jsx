import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import cardColor from "../../assets/Images/cardColor.jpg";
import { Link, useLocation } from "react-router-dom";
import HostedModal from "../../Pages/Dashboard/HostedModal/HostedModal";
import ParticipantsModal from "./AllParticipants";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const EachHostedEventDetails = ({ event }) => {
  const { participant } = useContext(AuthContext);
  const { id, name, location, starttime, endtime } = event;

  ///get full URL from website
  const locationWeb = useLocation();
  const fullURL = `${window.location.origin}${location.pathname}`;
  console.log(fullURL);
  // const getFullURL = () => {

  // };

  return (
    <div>
      <div className="card bg-base-100 image-full xl:w-96 lg:w-96 shadow-xl mt-6">
        <figure>
          <img src={cardColor} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p className="text-sm">
            {starttime} - {endtime}
          </p>
          <div className="flex items-center">
            <p className="flex items-center text-sm gap-1">
              <FaLocationDot className="text-white" /> {location}
            </p>
            <div>
              <Link to={`/myhostedevent/${id}`}>
                <div>
                  <button className="btn btn-sm text-black">Attendance</button>
                </div>
              </Link>

              <Link to={`/participants/${id}`}>
                <div className="mt-2">
                  <button className="btn btn-sm text-black">
                    Participants
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachHostedEventDetails;
