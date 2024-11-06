import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import LeftNavbar from "../../Components/LeftNavbar/LeftNavbar";

const Main = () => {
  return (
    <div>
      <div className="max-w-full mx-auto px-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
