import { Link } from "react-router-dom";
import React from "react";
import Gmap from "../components/elements/Gmap";

const Contact = () => {
  const locations = [
    {
      title: "Office",
      address: "205 North Michigan Avenue, Suite 810",
      city: "Chicago, 60601, USA",
    },
    {
      title: "Studio",
      address: "205 North Michigan Avenue, Suite 810",
      city: "Chicago, 60601, USA",
    },
    {
      title: "Shop",
      address: "205 North Michigan Avenue, Suite 810",
      city: "Chicago, 60601, USA",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto  px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1">
              <h4 className="text-green-600 font-semibold mb-4">
                How can help you ?
              </h4>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Let us know how we can help you
              </h1>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  01. Visit Feedback
                </h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  02. Employer Services
                </h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-green-600 mb-2">
                  03. Billing Inquiries
                </h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  04. General Inquiries
                </h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="container mx-auto mb-12 hidden md:block">
        <div className="relative w-full overflow-hidden rounded-lg shadow-md">
          <div id="map-panes" className="leaflet-map">
            <Gmap />
          </div>
        </div>
      </section>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {locations.map((location, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg">
              <h4 className="text-green-600 text-xl font-bold mb-3">
                {location.title}
              </h4>
              <p className="text-gray-700">{location.address}</p>
              <p className="text-gray-700">{location.city}</p>
              <p className="text-gray-700">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> contact@Evara.com
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center justify-center gap-2">
                <i className="fi-rs-marker"></i> View map
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <h5 className="text-green-600 font-semibold mb-2">Contact form</h5>
            <h2 className="text-3xl font-bold mb-4">Drop Us a Line</h2>
            <p className="text-gray-500 mb-6">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Your Phone"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="5"
              ></textarea>
              <button className="w-full lg:w-auto bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
                Send message
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img
              src="src/assets/imgs/page/contact-2.png"
              alt="Contact"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
