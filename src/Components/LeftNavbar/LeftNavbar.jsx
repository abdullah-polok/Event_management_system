import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dashboard from "../../assets/Images/dashboard.png";
import create from "../../assets/Images/interface.png";
import register from "../../assets/Images/add.png";
import feedback from "../../assets/Images/best-customer-experience.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const LeftNavbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-[#447af4] h-screen w-64">
      <div className="px-6 py-10 flex items-center gap-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="text-white font-semibold text-base w-52 truncate  ">
          {user?.displayName}
          <br />
          <span className="text-xs overflow-hidden">
            UID: {user?.uid.slice(0, 10)}
          </span>
        </div>
      </div>
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
