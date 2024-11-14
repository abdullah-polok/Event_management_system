import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import event1 from "../../../assets/Images/Work anniversary-bro.png";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Login = () => {
  const { signInUser, sendEmailVerification } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        if (res.user?.emailVerified) {
          e.target.reset();
          navigate("/");
        } else {
          sendEmailVerification(user).then(() => {
            toast("Verification email sent");
          });

          setTimeout(() => {
            e.target.reset();
            navigate("/home");
          }, 4000);
        }
      })
      .catch((err) => {
        toast("Password is incorrect");
        // console.log(err.message);
      });
  };

  return (
    <div className="hero  min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={event1} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#447af4] text-white">Login</button>
            </div>
            <ToastContainer></ToastContainer>
          </form>
          <div className="px-10 py-4">
            <Link to={"/register"} className="text-[#447af4]">
              Create a account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
