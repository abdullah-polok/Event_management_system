import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

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

  console.log(formattedDateToday);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-11/12 max-w-5xl text-black">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="bg-slate-300 p-4 rounded-lg mt-2 overflow-y-auto"
            >
              <h3 className="font-bold text-lg">{event.name}</h3>
              <p className="py-1">
                {event.starttime}-{event.endtime}
              </p>
              {formattedDateToday === event.starttime ? (
                <p className="flex items-center gap-2 mt-2">true</p>
              ) : (
                <p className="flex items-center gap-2 mt-2">false</p>
              )}
            </div>
          ))}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpcomingModal;
