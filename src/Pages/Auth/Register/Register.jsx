import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import event2 from "../../../assets/Images/Work anniversary-pana.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, user, sendEmailVerification } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (!email.includes("@gmail.com") && !email.includes("@ukh.edu.krd")) {
      setRegisterError(() => {
        toast("Please write a valid email");
        return "Please write a valid email";
      });
      return;
    }
    ///Check password length
    if (password.length < 6) {
      setRegisterError(() => {
        toast("Password should be at least six character or longer");
        return "Password should be at least six character or longer";
      });
      return;
    }
    // ///check password have any capital letter or not
    if (!/[A-Z]/.test(password)) {
      setRegisterError(() => {
        toast("Password should have at least one upper case letter");
        return "Password should have at least one upper case letter";
      });

      return;
    }
    // ///check password have any special character or not
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      setRegisterError(() => {
        toast("Password should have at least one special character");
        return "Password should have at least one special character";
      });

      return;
    }

    if (password !== confirmPassword) {
      setRegisterError(() => {
        toast("Password not match");
        return "Password not match";
      });
      return;
    }
    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        const user = res.user;

        return updateProfile(user, { displayName: name }).then(() => {
          sendEmailVerification(user).then(() => {
            toast("Verification email sent");
          });
          toast("User created successfully");
          //Reset login form
          e.target.reset();
          ///Navigate to Home
          navigate("/login");
        });
      })
      .catch((err) => {
        console.log(err.message);
        setRegisterError(err.message);
        toast(err.message);
      });
  };

  return (
    <div className="hero  min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={event2} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#447af4] text-white">Register</button>
              <ToastContainer></ToastContainer>
            </div>
          </form>
          <div className="px-10 py-4">
            <Link to={"/login"} className="text-[#447af4]">
              Already,have a account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
