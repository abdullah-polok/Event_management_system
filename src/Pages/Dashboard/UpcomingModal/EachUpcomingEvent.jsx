import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const EachUpcomingEvent = ({ event }) => {
  const { name, starttime, endtime, location } = event;

  ////set time format
  const options = { day: "numeric", month: "numeric" };

  ///Seprate today's date from time format
  const today = new Date();
  const formattedTodayDate = new Intl.DateTimeFormat("en-US", options).format(
    today
  );

  // Replace "at" with a space
  const formattedString = starttime.replace(" at ", " ");

  /// separate Date from time format
  const funllDate = new Date(formattedString);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    funllDate
  );

  // Parse the dates with the current year (or adjust as needed)
  const currentYear = new Date().getFullYear();
  const startDate = new Date(`${currentYear}/${formattedTodayDate}`);
  const endDate = new Date(`${currentYear}/${formattedDate}`);
  return (
    <div>
      {endDate >= startDate && (
        <div className="bg-[#ffffff49]  p-4 rounded-lg mt-2 overflow-y-auto">
          <h3 className="font-bold text-base">{name}</h3>
          <p className="py-1 text-sm">
            {starttime} - {endtime}
          </p>
          <p className="flex items-center gap-2 mt-2 text-sm">
            <FaLocationDot className="text-white text-sm" /> {location}
          </p>
        </div>
      )}
    </div>
  );
};

export default EachUpcomingEvent;
