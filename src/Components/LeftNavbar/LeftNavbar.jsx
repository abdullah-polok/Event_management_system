import React from "react";
import { Link } from "react-router-dom";
import dashboard from "../../assets/Images/dashboard.png";
import create from "../../assets/Images/interface.png";
import register from "../../assets/Images/add.png";
import feedback from "../../assets/Images/best-customer-experience.png";
const LeftNavbar = () => {
  return (
    <div className="bg-[#447af4] min-h-screen w-28">
      <div className="px-6 py-10">
        <div className="bg-[#FFFFFF24] rounded-lg p-2">
          <Link to={"/dashboard"} className="text-base text-white  rounded-sm ">
            <img className="w-20 bg-slate-200 rounded-lg p-1" src={dashboard} />
          </Link>
        </div>
        <div className="bg-[#FFFFFF24] rounded-lg p-2 mt-7">
          <Link
            to={"/eventcreation"}
            className="text-base text-white  rounded-sm "
          >
            <img className="w-20 bg-slate-200 rounded-lg p-1" src={create} />
          </Link>
        </div>
        <div className="bg-[#FFFFFF24] rounded-lg p-2 mt-7">
          <Link
            to={"/eventregistration"}
            className="text-base text-white  rounded-sm "
          >
            <img className="w-20 bg-slate-200 rounded-lg p-1" src={register} />
          </Link>
        </div>
        <div className="bg-[#FFFFFF24] rounded-lg p-2 mt-7">
          <Link to={"/feedback"} className="text-base text-white  rounded-sm ">
            <img className="w-20 bg-slate-200 rounded-lg p-1" src={feedback} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
