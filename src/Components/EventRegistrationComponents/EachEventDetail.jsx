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

  const hadleEventRegister = () => {
    const registerData = {
      email: user?.email,
      eventId: id,
      userId: user?.uid,
    };
    eventRegisterFunc(registerData);
  };

  ////filter already registered event

  return (
    <div>
      <div className="card bg-base-100 image-full w-96 h-64 shadow-xl mt-6">
        <figure>
          <img className="w-64 h-16" src={imageLink} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>type: {eventType}</p>
          <p>
            {formatedStartDate} - {formatedEndDate}
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
