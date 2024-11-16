import React from "react";
import myevent from "../../assets/Images/Dashboard/user.png";
import upcomingevent from "../../assets/Images/Dashboard/upcoming.png";
import createdEvent from "../../assets/Images/Dashboard/accept.png";
const DashboardCard = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2  justify-items-center gap-10 ">
      <div className="bg-[#dc9c7b] rounder w-64 h-64 rounded-2xl p-6 font-semibold text-white">
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
          Number of events:
        </div>
      </div>
      <div className="bg-[#97c994] rounder w-64 h-64 rounded-2xl p-6 font-semibold text-white">
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
      <div className="bg-[#447af4] rounder w-64 h-64 rounded-2xl p-6 font-semibold text-white">
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
          Number of events:
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
