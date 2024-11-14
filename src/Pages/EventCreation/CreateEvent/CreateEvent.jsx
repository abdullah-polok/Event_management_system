import React, { useContext, useState } from "react";
import axios from "axios";
import addevent from "../../../assets/Images/add-button.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const CreateEvent = () => {
  const { addEventFunc, user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImageUrl] = useState("");

  const apiKeys = "1ba08fcb8d889501df3573b6ada7b5a4";

  const handleEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const event = form.event.value;
    const starttime = form.starttime.value;
    const endtime = form.endtime.value;
    const location = form.location.value;
    const eventType = form.eventType.value;
    const eventData = {
      email: user?.email,
      name: event,
      starttime: starttime,
      endtime: endtime,
      location: location,
      eventType: eventType,
      imageLink: imgUrl,
    };

    if (imgUrl !== "") {
      console.log(eventData);
      addEventFunc(eventData);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 3000);
    }

    // e.target.reset();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKeys}`,
        formData
      );

      // Set the image URL from the response
      setImageUrl(response.data.data.display_url);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
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
                    placeholder="name of event"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Starting Date</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="starttime"
                    placeholder="start time"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Ending Date</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="endtime"
                    placeholder="end time"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="location"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Event type</span>
                  </label>
                  <select
                    type="text"
                    name="eventType"
                    className="input input-bordered"
                    required
                  >
                    <option value="">Select an event type</option>
                    <option value="meeting">Meeting</option>
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="workshop">Exhibition</option>
                    <option value="workshop">Ceremony</option>
                    <option value="workshop">Festival</option>
                  </select>
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Media</span>
                  </label>
                  <input
                    type="file"
                    name="media"
                    placeholder="Date"
                    onChange={handleFileChange}
                    className="input input-bordered py-2 w-full"
                    required
                  />
                  <div className="text-center">
                    <button
                      className="btn btn-sm bg-[#447af4] text-white mt-2 "
                      onClick={handleUpload}
                    >
                      Upload Image
                    </button>
                  </div>
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
