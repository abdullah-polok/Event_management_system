import React from "react";

const HostedModal = ({ eventHosted }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl text-white bg-[#fb7c73] ">
          {eventHosted.map((event, index) => (
            <div
              key={index}
              className="bg-[#ffffff49]  p-4 rounded-lg mt-2 overflow-y-auto"
            >
              <h3 className="font-bold text-lg">{event.name}</h3>
              <p className="py-1">
                {event.starttime} - {event.endtime}
              </p>
              <p className="flex items-center gap-2 mt-2"></p>
            </div>
          ))}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn bg-[#ffffff49] text-white ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default HostedModal;
