import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5 text-center">
      <div className="max-w-2xl bg-white p-10 rounded-lg shadow-md">
        <div className="mb-5">
          <img
            src="src/assets/imgs/page/page-404.png"
            alt="404 Not Found"
            className="w-32 mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The link you clicked may be broken or the page may have been removed.
          <br />
          Visit the{" "}
          <Link to="/" className="text-green-500">
            Homepage
          </Link>{" "}
          or{" "}
          <Link to="/contact" className="text-green-500">
            Contact us
          </Link>{" "}
          about the problem.
        </p>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search…"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <button className="absolute right-3 top-3 text-gray-500">
            <i className="fi-rs-search"></i>
          </button>
        </div>
        <Link
          to="/"
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600"
        >
          <i className="fi-rs-home mr-2"></i> Back To Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
