import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import EachUpcomingEvent from "./EachUpcomingEvent";

const UpcomingModal = () => {
  const { eventData, user } = useContext(AuthContext);
  const [upcomingEvent, setUpcomingEvent] = useState([]);

  // Get today's date
  const today = new Date();

  // Extract the year, month, and date
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 0-indexed: January is 0
  const currentDate = today.getDate();

  useEffect(() => {
    const upcomingEvents = [];

    eventData.forEach((event) => {
      // Preprocess the date string to make it parsable
      const dataString = event.starttime.replace(" at", "");

      const dateObj = new Date(dataString);

      const year = dateObj.getFullYear();
      const month = dateObj.getMonth() + 1;
      const date = dateObj.getDate();
      // console.log("Database data", year, " ", month, " ", date);
      if (
        year > currentYear ||
        (year === currentYear && month > currentMonth) ||
        (year === currentYear && month === currentMonth && date > currentDate)
      ) {
        upcomingEvents.push(event);
      }
    });

    setUpcomingEvent(upcomingEvents);
  }, [eventData]);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-[#14bc9c] text-white">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="bg-[#ffffff49]  btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white ">
                ✕
              </button>
            </form>
          </div>
          <Link to={"/eventregistration"}>
            {upcomingEvent.map((event, index) => (
              <EachUpcomingEvent key={index} event={event}></EachUpcomingEvent>
            ))}
          </Link>
        </div>
      </dialog>
    </div>
  );
};

export default UpcomingModal;
