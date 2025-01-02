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

  ///Seprate today's date from time format
  const today = new Date();
  // Extract the year, month, and date
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 0-indexed: January is 0
  const currentDate = today.getDate();

  const dataString = starttime.replace(" at", "");

  const dateObj = new Date(dataString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();

  return (
    <div>
      <div className="card bg-base-100 image-full xl:w-96 lg:w-96 shadow-xl mt-6 relative ">
        {year > currentYear ||
        (year === currentYear && month > currentMonth) ||
        (year === currentYear &&
          month === currentMonth &&
          date > currentDate) ? (
          <div className="absolute z-10 -top-3 -right-6 mr-2 p-1 rounded-lg text-[#64c729] font-semibold bg-[#e7efd1] text-xs">
            Upcoming
          </div>
        ) : year < currentYear ||
          (year === currentYear && month < currentMonth) ||
          (year === currentYear &&
            month === currentMonth &&
            date < currentDate) ? (
          <div className="absolute z-10 -top-3 -right-6 mr-2 p-1 rounded-lg text-red-700 font-semibold bg-red-100 text-xs">
            Finished
          </div>
        ) : (
          year === currentYear &&
          month === currentMonth &&
          date === currentDate && (
            <div className="absolute z-10 -top-3 -right-6 mr-2 p-1 rounded-lg text-[#1f97e6] font-semibold bg-sky-100 text-xs">
              New
            </div>
          )
        )}

        <figure className="w-full h-56">
          {/* xl:-64 lg:w-64 w-40 xl:h-64 lg:h-64 h-36  */}
          <img className="" src={imageLink} alt="event" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title xl:text-base text-sm">{name}</h2>
          <p className="text-sm">Type: {eventType}</p>
          <p className="text-sm">
            {starttime} - {endtime}
          </p>
          <p className="text-sm">Location: {location}</p>
          <p className="text-sm break-all">Organizer email: {email}</p>
          <div className="card-actions justify-end">
            {year > currentYear ||
            (year === currentYear && month > currentMonth) ||
            (year === currentYear &&
              month === currentMonth &&
              date > currentDate) ? (
              <>
                <button
                  onClick={hadleEventRegister}
                  className="btn bg-[#447af4] text-white btn-sm"
                >
                  Register Now
                </button>
                <ToastContainer />
              </>
            ) : year < currentYear ||
              (year === currentYear && month < currentMonth) ||
              (year === currentYear &&
                month === currentMonth &&
                date < currentDate) ? (
              <button className="btn bg-[gray] text-white disabled btn-sm">
                Finished
              </button>
            ) : (
              <>
                <button
                  onClick={hadleEventRegister}
                  className="btn bg-[#447af4] text-white btn-sm"
                >
                  Register Now
                </button>
                <ToastContainer />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachEventDetail;
