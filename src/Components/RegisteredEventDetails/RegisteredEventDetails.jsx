import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Feedback from "../Feedbacks/Feedback";

const RegisteredEventDetails = () => {
  const locations = useLocation();
  const result = locations.state?.event;
  const { user, eventFeedback, feedbackData } = useContext(AuthContext);
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
      eventIdFeed: eventId,
      userId: userId,
    };
    eventFeedback(feedbackInfo);
  };
  console.log(feedbackData);
  return (
    <div className="px-5">
      <div
        className="hero h-3/4 rounded-xl"
        style={{
          backgroundImage: `url(${imageLink})`,
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
        <div>
          {feedbackData.length ? (
            <div className="px-10 py-5 rounded-lg">
              {feedbackData.map((feedbackInfo) => (
                <Feedback
                  key={feedbackInfo.userId}
                  feedbackInfo={feedbackInfo}
                  eventId={eventId}
                ></Feedback>
              ))}
            </div>
          ) : (
            <></>
          )}
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
