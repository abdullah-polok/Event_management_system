import React, { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const RegisteredModal = ({ eventRegisteredFilter }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-[#1c73f3] text-white">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="bg-[#ffffff49]  btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white ">
                ✕
              </button>
            </form>
          </div>
          {eventRegisteredFilter.map((event, index) => (
            <>
              <div
                key={index}
                className="bg-[#FFFFFF24] p-4 rounded-lg mt-2 overflow-y-auto"
              >
                <h3 className="font-bold text-lg">{event.name}</h3>
                <p className="py-1">
                  {event.starttime} - {event.endtime}
                </p>
                {/* <p className="flex items-center gap-2 mt-2">
                    <FaLocationDot className="text-white" />
                    {event.location}
                  </p> */}
              </div>
            </>
          ))}
        </div>
      </dialog>
    </div>
  );
};

export default RegisteredModal;
