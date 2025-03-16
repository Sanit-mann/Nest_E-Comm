import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl rounded-lg p-8 flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <div className="hidden md:block md:w-1/2 p-5">
          <img
            src="src/assets/imgs/page/login-1.png"
            alt="Login Illustration"
            className="rounded-lg w-full"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full font-roboto md:w-1/2 p-5">
          <h1 className="text-5xl font-bold text-Text_Primary mb-2">Login</h1>
          <p className="mb-6 text-Text_Secondary">
            Don't have an account?{" "}
            <Link to="/register" className="text-Primary hover:text-Secondary">
              Create here
            </Link>
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="email"
                placeholder="Username or Email *"
                required
                className="w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Your password *"
                required
                className="w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-2/3">
                <input
                  type="text"
                  name="security-code"
                  placeholder="Security code *"
                  required
                  className="w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
              <span className="bg-green-200 text-green-700 font-bold px-5 py-3 rounded-lg text-lg">
                8675
              </span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-500"
                />
                <span className="text-Text_Secondary">Remember me</span>
              </label>
              <Link to="#" className="text-gray-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-auto bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-green-700"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
