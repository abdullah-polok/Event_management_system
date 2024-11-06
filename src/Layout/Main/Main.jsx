import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import LeftNavbar from "../../Components/LeftNavbar/LeftNavbar";

const Main = () => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div className="grid grid-cols-2">
        {/* Sidebar */}
        <div>
          <nav className="sidebar">
            <LeftNavbar></LeftNavbar>
          </nav>
        </div>
        <div>
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
