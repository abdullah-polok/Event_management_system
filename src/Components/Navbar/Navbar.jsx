import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";

const Navbar = () => {
  const { setUser, setLoading, user } = useContext(AuthContext);
  const navigate = useNavigate();
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
    <div className="navbar bg-base-100 shadow shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CampusConnect</a>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={handleUser}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
