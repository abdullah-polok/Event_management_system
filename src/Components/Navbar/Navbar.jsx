import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";
import useRouteChange from "../../Hooks/useRouteChange";

const Navbar = () => {
  const { setUser, setLoading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  ///custom hook for reload on route change call
  const handleRouteChange = (pathname) => {
    // console.log("Route changed to:", pathname);
  };
  useRouteChange(handleRouteChange);

  const handleUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null); // Clear user data after successful sign-out
        navigate("/"); // Navigate to login page
      })
      .catch((error) => {
        console.error("Error logging out: ", error); // Log any error that occurs
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };
  return (
    <div className="navbar  shadow-md">
      <div className="flex-1">
        <Link
          to={"/dashboard"}
          className="btn btn-ghost text-xl text-[#1c73f3] font-bold"
        >
          CampusConnect
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#447af4] rounded-box z-20 mt-3 w-52 p-2 shadow"
          >
            <li>
              {user ? (
                <button className="text-white" onClick={handleUser}>
                  Logout
                </button>
              ) : (
                <Link to={"/"} className="text-white">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
