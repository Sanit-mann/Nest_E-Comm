import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center py-20 justify-center min-h-screenp-5">
      <div className="w-full max-w-5xl rounded-lg p-8 flex flex-col md:flex-row">
        {/* Left Section - Register Form */}
        <div className="w-full font-roboto md:w-2/3 p-5">
          <h1 className="text-5xl font-bold mb-2">Create an Account</h1>
          <p className="mb-6 text-Text_Secondary">
            Already have an account?{" "}
            <Link to="/login" className="text-Primary hover:text-Secondary">
              Log in instead!
            </Link>
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="confirm-password"
                placeholder="Confirm password"
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
              <span className="bg-green-200 text-green-700 font-bold py-5 px-10 rounded-lg text-lg">
                8675
              </span>
            </div>
            <div className="mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="user-type"
                  className="form-radio text-green-500"
                />
                <span className="text-gray-600 font-semibold">
                  I am a customer
                </span>
              </label>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="radio"
                  name="user-type"
                  className="form-radio text-green-500"
                />
                <span className="text-gray-600 font-semibold">
                  I am a vendor
                </span>
              </label>
            </div>
            <div className="mb-6 pt-10">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-500"
                />
                <span className="text-gray-600">
                  I agree to terms & Policy.
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-auto bg-green-600 text-white py-3 px-10 rounded-lg text-lg font-bold hover:bg-green-700"
            >
              Submit & Register
            </button>
            <p className="text-gray-500 text-sm mt-4">
              <strong>Note:</strong> Your personal data will be used to support
              your experience throughout this website, to manage access to your
              account, and for other purposes described in our privacy policy.
            </p>
          </form>
        </div>

        {/* Right Section - Social Login */}
        <div className="w-full md:w-1/3 p-5 mt-40 flex flex-col items-center">
          <button className="w-full bg-[#1877F2] text-white py-3 transition-all duration-300 hover:-translate-y-1.5 rounded-lg text-lg font-bold mb-3 flex items-center justify-center">
            <img
              className="w-8 mr-3"
              src="src/assets/imgs/theme/icons/logo-facebook.svg"
              alt="Continue with Facebook"
            />{" "}
            Continue with Facebook
          </button>
          <button className="w-full bg-white text-gray-800 border transition-all duration-300 hover:-translate-y-1.5 border-gray-300 py-3 rounded-lg text-lg font-bold mb-3 flex items-center justify-center">
            <img
              className="w-8 mr-5"
              src="src/assets/imgs/theme/icons/logo-google.svg"
              alt="Continue with Facebook"
            />{" "}
            Continue with Google
          </button>
          <button className="w-full bg-black text-white py-3 transition-all duration-300 hover:-translate-y-1.5 rounded-lg text-lg font-bold flex items-center justify-center">
            <img
              className="w-8 mr-7"
              src="src/assets/imgs/theme/icons/logo-apple.svg"
              alt="Continue with Facebook"
            />{" "}
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
