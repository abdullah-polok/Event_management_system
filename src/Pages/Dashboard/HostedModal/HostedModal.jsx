import React from "react";
import EachHostedModal from "./EachHostedModal";

const HostedModal = ({ eventHosted }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl text-white bg-[#fb7c73] ">
          {eventHosted.map((event, index) => (
            <EachHostedModal key={index} event={event}></EachHostedModal>
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
