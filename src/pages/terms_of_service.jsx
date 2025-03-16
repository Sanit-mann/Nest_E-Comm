import React from "react";
import BlogSidebar from "./../components/elements/BlogSidebar";

function Terms_of_service() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Purchase Guide</h1>
        <p className="text-gray-500">
          <i className="fi-rs-user"></i> By John •{" "}
          <i className="fi-rs-calendar"></i> 9 April 2021 •{" "}
          <i className="fi-rs-clock"></i> 8 mins read •{" "}
          <i className="fi-rs-eye"></i> 29k Views
        </p>
        <img
          src="src/assets/imgs/page/guide-1.png"
          alt="Purchase Guide"
          className="rounded-lg w-full object-cover"
        />

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold">
              <i className="fi-rs-pencil"></i> 1. Account Registering
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              modi dolores neque omnis ipsa? Quia, nam voluptas!
            </p>
            <ul className="list-disc pl-6">
              <li>
                <i className="fi-rs-user"></i> Name (required)
              </li>
              <li>
                <i className="fi-rs-calendar"></i> Age (required)
              </li>
              <li>
                <i className="fi-rs-calendar"></i> Date of birth (required)
              </li>
              <li>
                <i className="fi-rs-id-badge"></i> Passport/ ID No. (required)
              </li>
              <li>
                <i className="fi-rs-briefcase"></i> Current career (required)
              </li>
              <li>
                <i className="fi-rs-phone"></i> Mobile phone numbers (required)
              </li>
              <li>
                <i className="fi-rs-envelope"></i> Email address (required)
              </li>
              <li>
                <i className="fi-rs-heart"></i> Hobbies & interests (optional)
              </li>
              <li>
                <i className="fi-rs-globe"></i> Social profiles (optional)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              <i className="fi-rs-shopping-cart"></i> 2. Select Product
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              officia necessitatibus repellat.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              <i className="fi-rs-check"></i> 3. Confirm Order Content
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              officia necessitatibus repellat.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              <i className="fi-rs-credit-card"></i> 4. Transaction Completed
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nesciunt nam ut magnam libero aspernatur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              <i className="fi-rs-credit-card"></i> 5. Accepted Credit Cards
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <i className="fi-rs-credit-card"></i> Visa
              </li>
              <li>
                <i className="fi-rs-credit-card"></i> Mastercards
              </li>
              <li>
                <i className="fi-rs-credit-card"></i> American Express
              </li>
              <li>
                <i className="fi-rs-credit-card"></i> Discover
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              <i className="fi-rs-download"></i> 6. Download and Setup
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              officia necessitatibus repellat.
            </p>
          </div>
        </div>
      </div>
      <div>
        <BlogSidebar />
      </div>
    </div>
  );
}

export default Terms_of_service;
