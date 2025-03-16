import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    img: "src/assets/imgs/theme/icons/icon-1.svg",
    title: "Best prices & offers",
    description: "Orders $50 or more",
  },
  {
    img: "src/assets/imgs/theme/icons/icon-2.svg",
    title: "Free delivery",
    description: "24/7 amazing services",
  },
  {
    img: "src/assets/imgs/theme/icons/icon-3.svg",
    title: "Great daily deal",
    description: "When you sign up",
  },
  {
    img: "src/assets/imgs/theme/icons/icon-4.svg",
    title: "Wide assortment",
    description: "Mega Discounts",
  },
  {
    img: "src/assets/imgs/theme/icons/icon-5.svg",
    title: "Easy returns",
    description: "Within 30 days",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white font-quicksand border-t mt-10">
      {/* Top Section - Newsletter */}
      <section className="relative h-auto rounded-3xl py-10 px-6 lg:px-16">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            backgroundImage: "url(src/assets/imgs/banner/banner-12.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-green-300 opacity-20 rounded-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="text-center font-quicksand md:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-Text_Primary mt-10 mb-4 leading-tight">
              Stay home & get your daily <br />
              needs from our shop
            </h2>
            <p className="text-Text_Secondary text-lg mb-6">
              Start your daily shopping with{" "}
              <span className="text-green-600 font-semibold">Nest Mart</span>
            </p>

            {/* Email Subscription Form */}
            <div className="flex flex-col sm:flex-row  mb-10 items-center justify-center md:justify-start gap-3">
              <div className="relative w-full sm:w-auto">
                <i className="fi-rs-envelope absolute left-4 top-1/2 transform pointer-events-none -translate-y-1/2 text-gray-500 text-lg"></i>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="pl-12 pr-4 py-3 rounded-full w-full sm:w-80 border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 -ml-12 z-10 rounded-full font-semibold shadow-md hover:bg-green-700 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="absolute -bottom-10 w-full  flex justify-center md:justify-end">
            <img
              src="src/assets/imgs/banner/banner-9.png"
              alt="Delivery Person"
              className="w-full md:w-auto scroll-pb-28 max-w-lg"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-100 p-5 rounded-lg shadow-sm"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-12 h-12 transition-all duration-300 hover:-translate-y-1.5"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Middle Section - Footer Links */}
      <section className="py-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-4">
        {/* Logo & Contact Info */}
        <div>
          <img
            src="src/assets/imgs/theme/logo.svg"
            alt="logo"
            className="mb-4 w-36 "
          />
          <p className="text-gray-600 mb-4">
            Pellentesque posuere orci lobortis
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <i className="fi-rs-location-alt text-lg text-green-600"></i>
              <strong>Address:</strong> 5171 W Campbell Ave, Utah 53127
            </li>
            <li className="flex items-center gap-2">
              <i className="fi-rs-headset text-lg text-green-600"></i>
              <strong>Call Us:</strong> (+91) - 540-025-124553
            </li>
            <li className="flex items-center gap-2">
              <i className="fi-rs-paper-plane text-lg text-green-600"></i>
              <strong>Email:</strong> contact@nestmart.com
            </li>
            <li className="flex items-center gap-2">
              <i className="fi-rs-clock text-lg text-green-600"></i>
              <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-Text_Primary text-2xl font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/delivery-information">Delivery Information</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/support-center">Support Center</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Account Links */}
        <div>
          <h4 className="text-Text_Primary text-2xl font-semibold mb-4">
            Account
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/view-cart">View Cart</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/wishlist">My Wishlist</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/track-order">Track My Order</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/help-ticket">Help Ticket</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/shipping-details">Shipping Details</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/compare-products">Compare Products</Link>
            </li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h4 className="text-Text_Primary text-2xl font-semibold mb-4">
            Information
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/search-terms">Search Terms</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/advanced-search">Advanced Search</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/help-faqs">Help & FAQ's</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/store-location">Store Location</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/orders-returns">Orders & Returns</Link>
            </li>
            <li className="transition-all duration-300 hover:text-Primary hover:translate-x-1.5">
              <Link to="/feedback">Feedback for Us</Link>
            </li>
          </ul>
        </div>

        {/* App & Payment */}
        <div>
          <h4 className=" font-bold text-Text_Primary text-2xl mb-4">
            App & Payment
          </h4>
          <p className="text-gray-600 text-sm mb-2">
            Install NetMart App from App Store or Google Play
          </p>
          <div className="flex gap-2 my-2">
            <img
              src="src/assets/imgs/theme/app-store.jpg"
              alt="App Store"
              className="w-28 transition-all duration-300 hover:-translate-y-1.5"
            />
            <img
              src="src/assets/imgs/theme/google-play.jpg"
              alt="Google Play"
              className="w-28 transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
          <p className="text-gray-600 text-sm mt-4">Secured Payment Gateways</p>
          <div className="flex mt-2">
            <img
              src="src/assets/imgs/theme/payment-method.png"
              alt="Visa"
              className="w-44"
            />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="border-t py-6 container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 px-4 text-sm">
        {/* Left Side - Copyright */}
        <p>
          &copy; 2025,{" "}
          <span className="text-green-600 font-semibold">NestMart</span> - An
          E-commerce Website
        </p>

        {/* Right Side - Designed by */}
        <p>
          Designed by{" "}
          <span className="text-green-600 font-semibold">Sanit Singh</span>. All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
