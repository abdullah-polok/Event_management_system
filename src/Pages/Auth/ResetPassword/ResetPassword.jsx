import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    resetPassword(email)
      .then((res) => {
        console.log(res.user);
        toast("Password reset successfully");
        e.target.reset();
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };
  return (
    <div className="hero mt-10">
      <div className="hero-content min-h-screen flex-col">
        <div className="text-center">
          <h1 className="xl:text-3xl lg:text-3xl text-xl font-bold text-[#1c73f3]">
            Reset your password
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-slate-400 shadow-md">
          <form onSubmit={handleReset} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#1c73f3]  text-white text-lg">
                Reset Password
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </form>
          <div className="text-center pb-4">
            <Link to={"/"} className="text-[#1c73f3]">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
