import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const RegisteredEventDetails = () => {
  const locations = useLocation();
  const result = locations.state?.event;
  const { user, eventFeedback } = useContext(AuthContext);
  const {
    eventId,
    userId,
    email,
    name,
    starttime,
    endtime,
    location,
    eventType,
    imageLink,
  } = result;

  const handlefeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;
    const feedbackInfo = {
      feedback: feedback,
      name: user?.displayName,
      userImage: user?.photoURL,
      eventId: eventId,
      userId: userId,
    };
    eventFeedback(feedbackInfo);
  };

  return (
    <div className="px-5">
      <div
        className="hero h-3/4 rounded-xl"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl-">
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5">
              {starttime} - {endtime}
            </p>
            <div className="flex  justify-center gap-2">
              <FaLocationDot className="text-white" />
              <p className="mb-5">{location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="border-2 px-10 py-5 rounded-lg">
          <h1 className="2/4">
            Feedbacks Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Id, sed! Feedbacks Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Id, sed!
          </h1>
          <h1 className="2/4">Feedbacks</h1>
          <h1 className="2/4">Feedbacks</h1>
          <h1 className="2/4">Feedbacks</h1>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <form onSubmit={handlefeedback}>
          <div className="form-control">
            <textarea
              placeholder="Add feedback"
              className="textarea textarea-bordered textarea-sm min-w-full rounded-lg"
              required
              name="feedback"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#447af4] text-white">
              submit feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisteredEventDetails;
