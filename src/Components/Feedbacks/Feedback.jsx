import React from "react";

const Feedback = ({ feedbackInfo, eventId }) => {
  const { feedback, name, userImage, eventIdFeed, userId } = feedbackInfo;

  return (
    <div>
      {eventId === eventIdFeed ? (
        <>
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-10 h-10 rounded-full">
                <img src={userImage} />
              </div>
            </div>
            <div className="w-full bg-slate-200 rounded-full py-2 text-left px-5">
              <p className="font-semibold">{name}</p>
              <p className="text-xs mt-0">{feedback}</p>
            </div>
          </div>
          <div className="mt-2 ml-10"></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Feedback;
