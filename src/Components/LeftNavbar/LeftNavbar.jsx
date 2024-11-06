import React from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <div className="bg-[#447af4] min-h-screen w-80">
      <div className="px-6 py-10">
        <div className="bg-[#FFFFFF24] px-16 py-3">
          <Link
            to={"/eventcreation"}
            className="text-base text-white  rounded-sm "
          >
            Event creation
          </Link>
        </div>
        <div className="bg-[#FFFFFF24] px-16 py-3 mt-4">
          <Link
            to={"/eventregistration"}
            className="text-base text-white  rounded-sm "
          >
            Event Registration
          </Link>
        </div>
        <div className="bg-[#FFFFFF24] px-16 py-3 mt-4">
          <Link to={"/feedback"} className="text-base text-white  rounded-sm ">
            Feedback
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
