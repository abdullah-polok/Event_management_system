import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import LeftNavbar from "../../Components/LeftNavbar/LeftNavbar";
import Login from "../Auth/Login/Login";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>{user ? <Navigate to="/dashboard"></Navigate> : <Login></Login>}</div>
  );
};

export default Home;
