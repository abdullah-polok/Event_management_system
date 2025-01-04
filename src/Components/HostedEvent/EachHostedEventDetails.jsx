import React, { useContext, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import cardColor from "../../assets/Images/cardColor.jpg";
import { Link, useLocation } from "react-router-dom";
import HostedModal from "../../Pages/Dashboard/HostedModal/HostedModal";
import ParticipantsModal from "./AllParticipants";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaRegCopy } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const EachHostedEventDetails = ({ event }) => {
  const { participant } = useContext(AuthContext);
  const { id, name, location, starttime, endtime } = event;

  ///get full URL from website
  const locationWeb = useLocation();
  const fullURL = `${window.location.origin}/myhostedevent/${id}`;

  ///text copy implementation
  const [isHidden, setIsHidden] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullURL).then(() => {
      toast("Link copied successfully");
    });
  };

  // const getFullURL = () => {

  // };

  return (
    <div>
      <div className="card bg-base-100 image-full xl:w-96 lg:w-96 shadow-xl mt-6">
        <figure>
          <img src={cardColor} />
        </figure>
        <div className="card-body">
          <div className="card-title flex items-center">
            <h1>{name}</h1>
            <button onClick={handleCopy} className="btn btn-md btn-ghost">
              <FaRegCopy />
            </button>
            <ToastContainer></ToastContainer>
          </div>
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
