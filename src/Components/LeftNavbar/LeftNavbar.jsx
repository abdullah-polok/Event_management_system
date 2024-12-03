import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import dashboard from "../../assets/Images/dashboard.png";
import create from "../../assets/Images/interface.png";
import register from "../../assets/Images/add.png";
import feedback from "../../assets/Images/best-customer-experience.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const LeftNavbar = () => {
  const { user } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex bg-slate-100">
      {/* Sidebar */}
      <div
        className={`bg-[#447af4] h-screen transition-all duration-300 ${
          isCollapsed ? "w-24" : "w-64"
        }`}
      >
        {/* User Info */}
        <div className="px-6 py-10 flex items-center gap-4">
          {!isCollapsed && (
            <>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} alt="User Avatar" />
                </div>
              </div>
              <div className="text-white font-semibold text-base w-52 truncate">
                {user?.displayName}
                <br />
                <span className="text-xs overflow-hidden">
                  UID: {user?.uid.slice(0, 10)}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-10">
          <div className="bg-[#FFFFFF24] rounded-lg p-2">
            <Link
              to={"/dashboard"}
              className="text-base text-white rounded-sm flex items-center gap-2 font-semibold"
            >
              <img
                className="w-8 bg-slate-200 rounded-lg p-1"
                src={dashboard}
                alt="Dashboard"
              />
              {!isCollapsed && <p className="text-base">Dashboard</p>}
            </Link>
          </div>
          <div className="bg-[#FFFFFF24] rounded-lg p-2 mt-7">
            <Link
              to={"/eventcreation"}
              className="text-base text-white rounded-sm flex items-center gap-2 font-semibold"
            >
              <img
                className="w-8 bg-slate-200 rounded-lg p-1"
                src={create}
                alt="Event Creation"
              />
              {!isCollapsed && <p className="text-base">Event Creation</p>}
            </Link>
          </div>
          <div className="bg-[#FFFFFF24] rounded-lg p-2 mt-7">
            <Link
              to={"/eventregistration"}
              className="text-base text-white rounded-sm flex items-center gap-2 font-semibold"
            >
              <img
                className="w-8 bg-slate-200 rounded-lg p-1"
                src={register}
                alt="Event Registration"
              />
              {!isCollapsed && <p className="text-base">Event Registration</p>}
            </Link>
          </div>
          <div className="bg-[#FFFFFF24] rounded-lg p-2 mt-7">
            <Link
              to={"/feedback"}
              className="text-base text-white rounded-sm flex items-center gap-2 font-semibold"
            >
              <img
                className="w-8 bg-slate-200 rounded-lg p-1"
                src={feedback}
                alt="Feedback"
              />
              {!isCollapsed && <p className="text-base">Feedback</p>}
            </Link>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="flex items-center h-screen">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-[#447af4] text-white w-8 h-16 rounded-r-full shadow-md flex items-center justify-center border border-white"
        >
          {isCollapsed ? ">" : "<"}
        </button>
      </div>
    </div>
  );
};

export default LeftNavbar;
