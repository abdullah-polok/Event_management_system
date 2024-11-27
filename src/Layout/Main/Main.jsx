import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import LeftNavbar from "../../Components/LeftNavbar/LeftNavbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Main = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="layout bg-[#FFFFFF36]">
      <Navbar></Navbar>
      {user && (
        <div className="flex h-screen">
          {/* Sidebar */}

          <div>
            <nav className="">
              <LeftNavbar></LeftNavbar>
            </nav>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar scrollbar-thin">
            {/* Main Content Area */}
            <main className="main-content bg-stone-50 h-screen">
              <Outlet /> {/* Renders the active route's content */}
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
