import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const EachEventDetail = ({ event }) => {
  const { user, eventRegisterFunc } = useContext(AuthContext);

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

  const hadleEventRegister = () => {
    const registerData = {
      email: user?.email,
      eventId: id,
      userId: user?.uid,
      starttime: starttime,
      endtime: endtime,
      name: name,
      location: location,
      imageLink: imageLink,
    };

    eventRegisterFunc(registerData, email);
  };

  ////set time format
  const options = { day: "numeric", month: "numeric" };

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

  // console.log(formattedTodayDate, formattedDate);

  // Parse the dates with the current year (or adjust as needed)
  const currentYear = new Date().getFullYear();
  const startDate = new Date(`${currentYear}/${formattedTodayDate}`);
  const endDate = new Date(`${currentYear}/${formattedDate}`);

  return (
    <div>
      <div className="card bg-base-100 image-full xl:w-96 w-80 h-64 shadow-xl mt-6 relative ">
        {startDate < endDate ? (
          <div className="absolute z-10 -top-3 -right-6  mr-2 p-1 rounded-lg text-[#64c729] font-semibold bg-[#e7efd1]">
            Upcoming
          </div>
        ) : startDate > endDate ? (
          <div className="absolute z-10 -top-3 -right-6  mr-2 p-1 rounded-lg text-red-700 font-semibold bg-red-100">
            Finished
          </div>
        ) : (
          startDate === endDate && (
            <div className="absolute z-10 -top-3 -right-6  mr-2 p-1 rounded-lg text-[#1f97e6] font-semibold bg-sky-100">
              New
            </div>
          )
        )}
        <figure>
          <img className="w-64 h-64" src={imageLink} alt="event" />
        </figure>
        <div className="card-body">
          <h2 className="card-title xl:text-base text-sm">{name}</h2>
          <p className="text-sm">type: {eventType}</p>
          <p className="text-sm">
            {starttime} - {endtime}
          </p>
          <p className="text-sm">location: {location}</p>
          <div className="card-actions justify-end">
            {startDate < endDate ? (
              <>
                <button
                  onClick={hadleEventRegister}
                  className="btn bg-[#447af4] text-white"
                >
                  Register Now
                </button>
                <ToastContainer></ToastContainer>
              </>
            ) : startDate > endDate ? (
              <button className="btn bg-[gray] text-white disabled">
                Finished
              </button>
            ) : (
              startDate === endDate && (
                <>
                  <button
                    onClick={hadleEventRegister}
                    className="btn bg-[#447af4] text-white"
                  >
                    Register Now
                  </button>
                  <ToastContainer></ToastContainer>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachEventDetail;
