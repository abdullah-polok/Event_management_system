import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const EachEventDetail = ({ event }) => {
  const {
    id,
    email,
    name,
    starttime,
    endtime,
    location,
    eventType,
    imageLink,
  } = event;

  const { user, eventRegisterFunc } = useContext(AuthContext);

  const hadleEventRegister = () => {
    const registerData = {
      email: user?.email,
      eventId: id,
      userId: user?.uid,
      starttime: starttime,
      endtime: endtime,
      name: name,
      location: location,
    };
    eventRegisterFunc(registerData);
  };

  ////set time format
  const options = { day: "numeric" };

  ///Seprate today's date from time format
  const today = new Date();
  const formattedTodayDate = new Intl.DateTimeFormat("en-US", options).format(
    today
  );

  // Replace "at" with a space
  const formattedString = starttime.replace(" at ", " ");

  /// separate Date from time format
  const funllDate = new Date(formattedString);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    funllDate
  );

  return (
    <div>
      <div className="card bg-base-100 image-full w-96 h-64 shadow-xl mt-6 relative">
        {parseInt(formattedTodayDate) < parseInt(formattedDate) ? (
          <div className="absolute z-10 -top-3 -right-6  mr-2 p-1 rounded-lg text-[#64c729] font-semibold bg-[#e7efd1]">
            Upcoming
          </div>
        ) : parseInt(formattedTodayDate) > parseInt(formattedDate) ? (
          <div className="absolute z-10 -top-3 -right-6  mr-2 p-1 rounded-lg text-red-700 font-semibold bg-red-100">
            Finished
          </div>
        ) : (
          parseInt(formattedTodayDate) === parseInt(formattedDate) && (
            <div className="absolute z-10 -top-3 -right-6  mr-2 p-1 rounded-lg text-[#1f97e6] font-semibold bg-sky-100">
              New
            </div>
          )
        )}
        <figure>
          <img className="w-64 h-16" src={imageLink} alt="event" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>type: {eventType}</p>
          <p>
            {starttime} - {endtime}
          </p>
          <p className="text-sm">location: {location}</p>
          <div className="card-actions justify-end">
            {parseInt(formattedTodayDate) < parseInt(formattedDate) ? (
              <button
                onClick={hadleEventRegister}
                className="btn bg-[#447af4] text-white"
              >
                Register Now
              </button>
            ) : parseInt(formattedTodayDate) > parseInt(formattedDate) ? (
              <button className="btn bg-[gray] text-white disabled">
                Finished
              </button>
            ) : (
              parseInt(formattedTodayDate) === parseInt(formattedDate) && (
                <button
                  onClick={hadleEventRegister}
                  className="btn bg-[#447af4] text-white"
                >
                  Register Now
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachEventDetail;

{
  /* <button
onClick={hadleEventRegister}
className="btn bg-[#447af4] text-white"
>
Register Now
</button> */
}
