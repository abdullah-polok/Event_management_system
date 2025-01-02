import React, { useContext } from "react";
import myevent from "../../assets/Images/Dashboard/user.png";
import upcomingevent from "../../assets/Images/Dashboard/upcoming.png";
import createdEvent from "../../assets/Images/Dashboard/accept.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import RegisteredModal from "../../Pages/Dashboard/RegisteredModal/RegisteredModal";
import HostedModal from "../../Pages/Dashboard/HostedModal/HostedModal";
import UpcomingModal from "../../Pages/Dashboard/UpcomingModal/UpcomingModal";
import EachRegisteredModalDetails from "../../Pages/Dashboard/RegisteredModal/EachRegisteredDetails";
import { Link } from "react-router-dom";
const DashboardCard = () => {
  const { eventData, eventRegisterData, user } = useContext(AuthContext);

  const eventHosted = eventData.filter((event) => event.email === user?.email);

  const eventRegisteredFilter = eventRegisterData.filter(
    (event) => event.email === user?.email
  );

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 justify-items-center overflow-y-auto ">
      <div className=" card bg-[#1c73f3]  xl:w-96 w-72 h-64 rounded-xl p-6 font-semibold text-white mt-6">
        <div className=" flex gap-3">
          <div className="bg-[#ffffff49] rounded-lg text-center px-1 py-1  w-16 h-14">
            <img
              className="w-14 h-12 bg-white py-1 px-2 rounded-lg "
              src={myevent}
            />
          </div>
          <h1 className="text-base">My registered events</h1>
        </div>
        <div
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="mt-4 bg-[#ffffff49] rounded-xl px-3 py-4 text-sm"
        >
          Number of events: {eventRegisteredFilter.length}
        </div>
        <RegisteredModal
          eventRegisteredFilter={eventRegisteredFilter}
        ></RegisteredModal>
        <Link to="/myregistered" state={{ eventRegisteredFilter }}>
          <div className=" mt-4 bg-[#ffffff49] rounded-xl px-3 py-4 text-sm">
            View event details
          </div>
        </Link>
      </div>

      <div className="bg-[#14bc9c] rounder xl:w-96 w-72 h-64 rounded-xl p-6 font-semibold text-white mt-5">
        <div className="flex gap-3">
          <div className="bg-[#FFFFFF24] rounded-lg text-center px-1 py-1  w-16 h-14">
            <img
              className="w-14 h-12 bg-white py-1 px-2 rounded-lg "
              src={upcomingevent}
              alt=""
            />
          </div>
          <h1 className="text-base">Upcoming events</h1>
        </div>
        <div
          onClick={() => document.getElementById("my_modal_6").showModal()}
          className="mt-4 bg-[#ffffff49] rounded-xl px-3 py-4 text-sm"
        >
          Upcoming events details
        </div>
        <UpcomingModal></UpcomingModal>
      </div>

      <div className="bg-[#fb7c73] rounder xl:w-96 w-72 h-64 rounded-xl p-6 font-semibold text-white mt-5">
        <div className="flex gap-3">
          <div className="bg-[#FFFFFF24] rounded-lg text-center px-1 py-1  w-16 h-14">
            <img
              className="w-14 h-12 bg-white py-1 px-2 rounded-lg "
              src={createdEvent}
              alt=""
            />
          </div>
          <h1 className="text-base">Hosted event</h1>
        </div>
        <div
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="mt-4 bg-[#ffffff49] rounded-xl px-3 py-4 text-sm"
        >
          Number of events: {eventHosted.length}
        </div>
        <HostedModal eventHosted={eventHosted}></HostedModal>
        <Link to="/myhostedevent" state={{ eventHosted }}>
          <div className=" mt-4 bg-[#ffffff49] rounded-xl px-3 py-4 text-sm">
            View hosted event details
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardCard;
