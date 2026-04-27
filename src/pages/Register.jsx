import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-xl text-center pt-4">
          Register your account
        </h2>
        <div className="card-body ">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            {/* Photo Url */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Name" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>

            <h2 className="font-bold text-center mt-2">
              Already have an Account? Please{" "}
              <Link to="/auth/login" className="text-secondary font-semibold">
                Login
              </Link>
            </h2>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
