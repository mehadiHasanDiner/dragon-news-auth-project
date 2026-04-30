import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
        alert("user logged in successfully");
        // form.reset();
      })
      .catch((error) => {
        // console.log(error.message);
        const errorCode = error.code;
        setError(errorCode);
      });
    // console.log(email, password);
  };
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-xl text-center pt-4">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body ">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {error && <p className="text-red-600">{error}</p>}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

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
        </form>
      </div>
    </div>
  );
};

export default Login;
