import React from "react";
import addevent from "../../../assets/Images/add-button.png";
const CreateEvent = () => {
  const handleEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const event = form.event.value;
    const data = form.date.value;
    const media = form.media.value;

    e.target.reset();
    console.log(event, data, media);
  };

  return (
    <div className="mt-16">
      <div className="bg-white  shadow-lg pr-10 py-10 pl-4">
        <div>
          <h1 className="text-2xl text-left">Add Event</h1>
          <p className="mt-1 text-[#4d6d79]">
            Create your favorite event with CampusConnect
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <img
            onClick={() => document.getElementById("my_modal_1").showModal()}
            src={addevent}
            className="btn btn-ghost"
            alt=""
          />
          <p className="text-[#447af4] font-semibold">Create New Event</p>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form onSubmit={handleEvent} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name of Event</span>
                  </label>
                  <input
                    type="text"
                    name="event"
                    placeholder="event"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Media</span>
                  </label>
                  <input
                    type="file"
                    name="media"
                    placeholder="Date"
                    className="input input-bordered py-2"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-[#447af4] text-white">
                    Add event
                  </button>
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
