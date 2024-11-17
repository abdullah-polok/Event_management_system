import React, { useContext } from "react";
import myevent from "../../assets/Images/Dashboard/user.png";
import upcomingevent from "../../assets/Images/Dashboard/upcoming.png";
import createdEvent from "../../assets/Images/Dashboard/accept.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DashboardModal from "../../Pages/Dashboard/DashboardModal";
const DashboardCard = () => {
  const { eventData, eventRegisterData, user } = useContext(AuthContext);

  const eventHosted = eventData.filter((event) => event.email === user?.email);
  const eventRegisteredFilter = eventRegisterData.filter(
    (event) => event.email === user?.email
  );
  return (
    <div className="lg:flex flex-row-reverse justify-center gap-10  px-10 overflow-y-auto">
      <div
        onClick={() => document.getElementById("my_modal_4").showModal()}
        className="bg-[#dc9c7b] rounder w-96 h-64 rounded-2xl p-6 font-semibold text-white mt-6"
      >
        <div className=" flex gap-3">
          <div className="bg-[#ffffff49] rounded-lg text-center px-1 py-1  w-16 h-14">
            <img
              className="w-14 h-12 bg-white py-1 px-2 rounded-lg "
              src={myevent}
              alt=""
            />
          </div>
          <h1 className="text-lg">My events</h1>
        </div>
        <div className="mt-10 bg-[#ffffff49] rounded-xl px-3 py-6">
          Number of events: {eventRegisteredFilter.length}
        </div>
        <DashboardModal></DashboardModal>
      </div>
      <div className="bg-[#97c994] rounder w-96 h-64 rounded-2xl p-6 font-semibold text-white mt-5">
        <div className="flex gap-3">
          <div className="bg-[#FFFFFF24] rounded-lg text-center px-1 py-1  w-16 h-14">
            <img
              className="w-14 h-12 bg-white py-1 px-2 rounded-lg "
              src={upcomingevent}
              alt=""
            />
          </div>
          <h1 className="text-lg">Upcoming events</h1>
        </div>
        <div className="mt-10 bg-[#ffffff49] rounded-xl px-3 py-6">
          Number of events:
        </div>
      </div>
      <div className="bg-[#447af4] rounder w-96 h-64 rounded-2xl p-6 font-semibold text-white mt-5">
        <div className="flex gap-3">
          <div className="bg-[#FFFFFF24] rounded-lg text-center px-1 py-1  w-16 h-14">
            <img
              className="w-14 h-12 bg-white py-1 px-2 rounded-lg "
              src={createdEvent}
              alt=""
            />
          </div>
          <h1 className="text-lg">Hosted event</h1>
        </div>
        <div className="mt-10 bg-[#ffffff49] rounded-xl px-3 py-6">
          Number of events: {eventHosted.length}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
