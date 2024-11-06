import React from "react";
import { Link } from "react-router-dom";
import event2 from "../../../assets/Images/Work anniversary-pana.png";
const Register = () => {
  return (
    <div className="hero  min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={event2} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Link to={"/"} className="btn bg-[#447af4] text-white">
                Register
              </Link>
            </div>
          </form>
          <div className="px-10 py-4">
            <Link to={"/"} className="text-[#447af4]">
              Already,have a account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
