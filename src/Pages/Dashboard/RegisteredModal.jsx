import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaLocationDot } from "react-icons/fa6";
const RegisteredModal = ({ eventRegisteredFilter }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl text-black">
          {eventRegisteredFilter.map((event, index) => (
            <div
              key={index}
              className="bg-slate-300 p-4 rounded-lg mt-2 overflow-y-auto"
            >
              <h3 className="font-bold text-lg">{event.name}</h3>
              <p className="py-1">
                {event.starttime} - {event.endtime}
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaLocationDot className="text-[#447af4]" />
                {event.location}
              </p>
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

export default RegisteredModal;
