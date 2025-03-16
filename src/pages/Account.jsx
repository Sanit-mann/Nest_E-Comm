import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accounts = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto py-32 px-20">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-1/4">
          <ul className="space-y-2">
            {[
              { id: 1, text: "Dashboard", icon: "fi-rs-settings-sliders" },
              { id: 2, text: "Orders", icon: "fi-rs-shopping-bag" },
              {
                id: 3,
                text: "Track Your Order",
                icon: "fi-rs-shopping-cart-check",
              },
              { id: 4, text: "My Address", icon: "fi-rs-marker" },
              { id: 5, text: "Account details", icon: "fi-rs-user" },
            ].map(({ id, text, icon }) => (
              <li key={id} className="w-full">
                <button
                  className={`w-full flex items-center font-semibold text-lg p-5 rounded-2xl text-left ${
                    activeIndex === id
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-Text_Secondary"
                  }`}
                  onClick={() => handleOnClick(id)}
                >
                  <i className={`${icon} mr-3`}></i>
                  {text}
                </button>
              </li>
            ))}
            <li className="w-full">
              <Link
                to="/login"
                className="w-full flex items-center font-semibold text-lg p-5 rounded-2xl text-Text_Secondary bg-gray-100"
              >
                <i className="fi-rs-sign-out mr-3"></i>Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="w-full my-5 md:w-2/4">
          {/* Dashboard */}
          {activeIndex === 1 && (
            <div>
              <h3 className="text-3xl font-roboto mb-5 text-Text_Primary font-bold ">
                Hello Rosie!
              </h3>
              <p className="text-Text_Secondary font-roboto">
                From your account dashboard, you can easily check & view your
                <Link to="#" className="text-green-500">
                  {" "}
                  recent orders
                </Link>
                , manage your
                <Link to="#" className="text-green-500">
                  {" "}
                  shipping and billing addresses
                </Link>{" "}
                and
                <Link to="#" className="text-green-500">
                  {" "}
                  edit your password and account details
                </Link>
                .
              </p>
            </div>
          )}

          {/* Orders */}
          {activeIndex === 2 && (
            <div>
              <h3 className="text-3xl font-roboto mb-5 text-Text_Primary font-bold ">
                Your Orders
              </h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="p-3">Order</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Total</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {["#1357", "#2468", "#2366"].map((order, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">{order}</td>
                      <td className="p-3">March 45, 2020</td>
                      <td className="p-3">Processing</td>
                      <td className="p-3">$125.00 for 2 item</td>
                      <td className="p-3">
                        <Link to="#" className="text-green-500">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Track Order */}
          {activeIndex === 3 && (
            <div>
              <h3 className="text-3xl font-roboto text-Text_Primary font-bold ">
                Orders Tracking
              </h3>
              <p className="text-Text_Secondary my-7">
                To track your order please enter your OrderID in the box below
                and press "Track" button. This was given to you on your receipt
                and in the confirmation email you should have received.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-Text_Secondary text-sm mb-2">
                    Order ID
                  </label>
                  <input
                    type="text"
                    placeholder="Found in your order confirmation email"
                    className="w-full border p-5 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-Text_Secondary text-sm mb-2">
                    Billing Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email used during checkout"
                    className="w-full border p-5 rounded-md"
                  />
                </div>
                <button className="bg-Primary text-white px-10 py-3 rounded-md">
                  Track
                </button>
              </form>
            </div>
          )}

          {/* Addresses */}
          {activeIndex === 4 && (
            <div>
              <h3 className="text-3xl font-roboto mb-5 text-Text_Primary font-bold ">
                My Address
              </h3>
              <p>Billing and shipping addresses will be displayed here.</p>
            </div>
          )}

          {/* Account Details */}
          {activeIndex === 5 && (
            <div className="container text-Text_Secondary mx-auto py-10 px-5">
              <h3 className="text-3xl font-roboto mb-5 text-Text_Primary font-bold ">
                Account Details
              </h3>
              <p className="mb-5">
                Already have an account?{" "}
                <Link to="/login" className="text-Primary hover:text-Secondary">
                  Log in instead!
                </Link>
              </p>

              <form className="bg-white p-6 text-sm pt-0 rounded-lg ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block pb-3 font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-5 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block pb-3 font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-5 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block pb-3 font-medium">
                    Display Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-5 rounded-md"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block pb-3 font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-5 rounded-md"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block pb-3 font-medium">
                    Current Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 p-5 rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block pb-3 font-medium">
                      New Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 p-5 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block pb-3 font-medium">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 p-5 rounded-md"
                      required
                    />
                  </div>
                </div>

                <button className="bg-green-500 text-white px-5 py-3 rounded-md w-full md:w-auto">
                  Save Change
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
