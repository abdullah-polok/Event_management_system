import React from "react";

const EachEvent = ({ eachevent }) => {
  const { email, name, starttime, endtime, location, eventType, imageLink } =
    eachevent;

  const startDate = new Date(starttime);
  const endDate = new Date(endtime);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formatedStartDate = startDate.toLocaleString("en-US", options);
  const formatedEndDate = endDate.toLocaleString("en-US", options);

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-10">
      <figure>
        <img className="w-56 h-64" src={imageLink} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div>
          <p>Start Time: {formatedStartDate}</p>
          <p>End time: {formatedEndDate}</p>
        </div>
      </div>
    </div>
  );
};

export default EachEvent;
