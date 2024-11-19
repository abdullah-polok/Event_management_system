import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import LeftNavbar from "../../Components/LeftNavbar/LeftNavbar";

const Main = () => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div>
          <nav className="">
            <LeftNavbar></LeftNavbar>
          </nav>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Main Content Area */}
          <main className="main-content">
            <Outlet /> {/* Renders the active route's content */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Main;
