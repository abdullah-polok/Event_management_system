import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import EachUpcomingEvent from "./EachUpcomingEvent";

const UpcomingModal = () => {
  const { eventData, user } = useContext(AuthContext);

  //   const upcomingEvent;

  const today = new Date();

  // Format options
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // Format the date
  const formattedDateToday = new Intl.DateTimeFormat("en-US", options).format(
    today
  );

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-[#14bc9c] text-white">
          <Link to={"/eventregistration"}>
            {eventData.map((event, index) => (
              <EachUpcomingEvent key={index} event={event}></EachUpcomingEvent>
            ))}
          </Link>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn bg-[#ffffff49] text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpcomingModal;
