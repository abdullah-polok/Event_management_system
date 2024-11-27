import React from "react";

const Feedback = ({ feedbackInfo }) => {
  const { feedback, name, userImage, eventId, userId } = feedbackInfo;
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <img src={userImage} />
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg py-4 text-left pl-2 pr-20">
          <p className="font-semibold">{name}</p>
          <p className="text-xs mt-0">{feedback}</p>
        </div>
      </div>
      <div className="mt-2 ml-10"></div>
    </div>
  );
};

export default Feedback;
