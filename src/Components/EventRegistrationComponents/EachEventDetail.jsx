import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const EachEventDetail = ({ event }) => {
  const {
    id,
    email,
    name,
    starttime,
    endtime,
    location,
    eventType,
    imageLink,
  } = event;

  const { user, eventRegisterFunc } = useContext(AuthContext);

  const hadleEventRegister = () => {
    const registerData = {
      email: user?.email,
      eventId: id,
      userId: user?.uid,
      starttime: starttime,
      endtime: endtime,
      name: name,
      location: location,
    };
    eventRegisterFunc(registerData);
  };

  ////filter already registered event
  return (
    <div>
      <div className="card bg-base-100 image-full w-96 h-64 shadow-xl mt-6 relative">
        <div className="absolute z-10 -top-3 -right-6  mr-2 p-1 rounded-lg text-[#64c729] bg-[#e7efd1]">
          New
        </div>
        <figure>
          <img className="w-64 h-16" src={imageLink} alt="event" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>type: {eventType}</p>
          <p>
            {starttime} - {endtime}
          </p>
          <p className="text-sm">location: {location}</p>
          <div className="card-actions justify-end">
            <button
              onClick={hadleEventRegister}
              className="btn bg-[#447af4] text-white"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachEventDetail;
