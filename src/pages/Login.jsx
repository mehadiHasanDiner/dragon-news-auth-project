import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-xl text-center pt-4">
          Login your account
        </h2>
        <div className="card-body ">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>

            <h2 className="font-bold text-center mt-2">
              Don't Have an Account?{" "}
              <Link
                to="/auth/register"
                className="text-secondary font-semibold"
              >
                Register
              </Link>
            </h2>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
