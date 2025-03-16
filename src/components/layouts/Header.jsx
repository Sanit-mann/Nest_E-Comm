import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./../ecommerce/Search";

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaMenuOpen, setMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="font-roboto text-Text_Secondary border-b hidden lg:block">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-4 text-sm">
              <Link to="/about" className="hover:text-Link_hov">
                About Us
              </Link>
              <Link to="/account" className="hover:text-Link_hov">
                My Account
              </Link>
              <Link to="/wishlist" className="hover:text-Link_hov">
                Wishlist
              </Link>
              <Link to="/account" className="hover:text-Link_hov">
                Order Tracking
              </Link>
            </div>
            <div className="text-center font-bold">
              <p className="text-sm">
                Get great devices up to 50% off
                <Link to="/shop" className="text-Primary hover:text-Secondary">
                  {" "}
                  View details
                </Link>
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex  items-center space-x-4">
                <span className="text-sm">
                  Need help? Call Us:
                  <strong className="text-Primary"> +1800 900</strong>
                </span>
              </div>
              {/* Language Dropdown */}
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setLanguageDropdown(true)}
                onMouseLeave={() => setLanguageDropdown(false)}
              >
                <button className="hover:text-gray-900 flex items-center font-roboto text-sm">
                  <i className="fi-rs-world mr-1"></i> English
                  <i className="fi-rs-angle-down ml-1"></i>
                </button>
                {languageDropdown && (
                  <ul
                    className="absolute left-0 top-full w-32 bg-white shadow-md rounded-lg py-2 font-roboto text-sm z-10"
                    onMouseEnter={() => setLanguageDropdown(true)}
                    onMouseLeave={() => setLanguageDropdown(false)}
                  >
                    <li className="hover:bg-gray-100 flex gap-2 px-4 py-2 cursor-pointer">
                      <img
                        className="w-5"
                        src="src/assets/imgs/theme/flag-fr.png"
                        alt="Français"
                      />
                      Français
                    </li>
                    <li className="hover:bg-gray-100 flex gap-2 px-4 py-2 cursor-pointer">
                      <img
                        className="w-5"
                        src="src/assets/imgs/theme/flag-dt.png"
                        alt="Deutsch"
                      />
                      Deutsch
                    </li>
                    <li className="hover:bg-gray-100 flex gap-2 px-4 py-2 cursor-pointer">
                      <img
                        className="w-5"
                        src="src/assets/imgs/theme/flag-ru.png"
                        alt="Pусский"
                      />
                      Pусский
                    </li>
                  </ul>
                )}
              </div>
              {/* Currency Dropdown */}
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setCurrencyDropdown(true)}
                onMouseLeave={() => setCurrencyDropdown(false)}
              >
                <button className="hover:text-gray-900 flex items-center font-roboto text-sm z-10">
                  USD <i className="fi-rs-angle-down ml-1"></i>
                </button>
                {currencyDropdown && (
                  <ul
                    className="absolute top-full left-0 w-20 bg-white shadow-md rounded-lg py-2 font-roboto text-sm z-10"
                    onMouseEnter={() => setCurrencyDropdown(true)}
                    onMouseLeave={() => setCurrencyDropdown(false)}
                  >
                    <li className="hover:bg-gray-100  flex gap-2 px-4 py-2 cursor-pointer">
                      <img
                        className="w-5"
                        src="src/assets/imgs/theme/flag-fr.png"
                        alt="Français"
                      />
                      INR
                    </li>
                    <li className="hover:bg-gray-100 flex gap-2 px-4 py-2 cursor-pointer">
                      <img
                        className="w-5"
                        src="src/assets/imgs/theme/flag-dt.png"
                        alt="Deutsch"
                      />
                      MBP
                    </li>
                    <li className="hover:bg-gray-100 flex gap-2 px-4 py-2 cursor-pointer">
                      <img
                        className="w-5"
                        src="src/assets/imgs/theme/flag-ru.png"
                        alt="Pусский"
                      />
                      EU
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden font-quicksand font-normal text-Text_Secondary lg:flex items-center border-b justify-between py-4 px-6 ">
        <div>
          <Link to="/">
            <img
              src="src/assets/imgs/theme/logo.svg"
              alt="Logo"
              className="h-12"
            />
          </Link>
        </div>
        <div className="w-[50%] flex justify-center">
          {/* Integrated Search Component */}
          <Search />
        </div>
        <div className="flex space-x-8 items-center">
          {/* Location Dropdown */}
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>Your Location</option>
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>New York</option>
          </select>

          {/* Compare */}
          <Link
            to="/compare"
            className="relative flex items-center text-Text_Secondary hover:text-Link_hov"
          >
            <i className="fi fi-rs-exchange mr-2"></i>
            <span className="text-sm font-medium">Compare</span>
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs rounded-full px-1.5 py-0.5">
              0
            </span>
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative flex items-center text-Text_Secondary hover:text-Link_hov"
          >
            <i className="fi-rs-heart mr-2"></i>
            <span className="text-sm font-medium">Wishlist</span>
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs rounded-full px-1.5 py-0.5">
              0
            </span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center text-Text_Secondary hover:text-Link_hov"
          >
            <i className="fi-rs-shopping-cart mr-2"></i>
            <span className="text-sm font-medium">Cart</span>
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs rounded-full px-1.5 py-0.5">
              0
            </span>
          </Link>

          {/* User Account Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setUserDropdown(true)}
            onMouseLeave={() => setUserDropdown(false)}
          >
            <button className="flex items-center text-Text_Secondary hover:text-Link_hov">
              <i className="fi-rs-user mr-2"></i>
              <span className="text-sm font-medium">Account</span>
            </button>
            {userDropdown && (
              <ul className="absolute top-full right-0 bg-white shadow-md p-3 text-sm w-56 rounded-lg border border-gray-200 z-10">
                <Link to="/account">
                  <li className="hover:text-Primary cursor-pointer flex items-center py-2 px-4">
                    <i className="fi-rs-user mr-2"></i>My Account
                  </li>
                </Link>
                <li className="hover:text-Primary cursor-pointer flex items-center py-2 px-4">
                  <i className="fi-rs-location-alt mr-2"></i>Order Tracking
                </li>
                <li className="hover:text-Primary cursor-pointer flex items-center py-2 px-4">
                  <i className="fi-rs-label mr-2"></i>My Voucher
                </li>
                <Link to="/wishlist">
                  <li className="hover:text-Primary cursor-pointer flex items-center py-2 px-4">
                    <i className="fi-rs-heart mr-2"></i>Wishlist
                  </li>
                </Link>
                <li className="hover:text-Primary cursor-pointer flex items-center py-2 px-4">
                  <i className="fi-rs-settings-sliders mr-2"></i>Settings
                </li>
                <Link to="/login">
                  <li className="hover:text-Primary cursor-pointer flex items-center py-2 px-4">
                    <i className="fi-rs-sign-out mr-2"></i>Sign Out
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* BOTTOM HEADER */}
      <div className="text-sm text-Text_Primary top-0 z-50 font-semibold border-b ">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex text-center items-center gap-10">
            {/* Browse Categories Dropdown */}
            <div className="relative font-quicksand z-10">
              <button
                onClick={() => setIsToggled(!isToggled)}
                className="relative bg-green-600 text-white font-bold py-3 px-4 rounded-lg flex items-center"
              >
                <i className="fi-rs-apps mr-2"></i> Browse All Categories
                <i className="fi-rs-angle-down ml-2"></i>
              </button>
              {isToggled && (
                <div className="absolute left-0 mt-2 w-96 bg-white border-[0.5px] shadow-md border-Primary rounded-lg p-4 grid grid-cols-2 gap-4">
                  <Link
                    to="/shop"
                    className="flex items-center p-3 border rounded-lg hover:border-Primary"
                  >
                    <img
                      src="src/assets/imgs/theme/icons/icon-1.svg"
                      alt=""
                      className="h-6 mr-2"
                    />{" "}
                    Milks & Dairies
                  </Link>
                  <Link
                    to="/shop"
                    className="flex items-center p-3 border rounded-lg hover:border-Primary"
                  >
                    <img
                      src="src/assets/imgs/theme/icons/icon-2.svg"
                      alt=""
                      className="h-6 mr-2"
                    />{" "}
                    Clothing
                  </Link>
                  <Link
                    to="/shop"
                    className="flex items-center p-3 border rounded-lg hover:border-Primary"
                  >
                    <img
                      src="src/assets/imgs/theme/icons/icon-3.svg"
                      alt=""
                      className="h-6 mr-2"
                    />{" "}
                    Pet Foods
                  </Link>
                  <Link
                    to="/shop"
                    className="flex items-center p-3 border rounded-lg hover:border-Primary"
                  >
                    <img
                      src="src/assets/imgs/theme/icons/icon-4.svg"
                      alt=""
                      className="h-6 mr-2"
                    />{" "}
                    Baking Material
                  </Link>
                  <Link
                    to="/shop"
                    className="flex items-center p-3 border rounded-lg hover:border-Primary"
                  >
                    <img
                      src="src/assets/imgs/theme/icons/icon-1.svg"
                      alt=""
                      className="h-6 mr-2"
                    />{" "}
                    Milks & Dairies
                  </Link>
                  <Link
                    to="/shop"
                    className="flex items-center p-3 border rounded-lg hover:border-Primary"
                  >
                    <img
                      src="src/assets/imgs/theme/icons/icon-2.svg"
                      alt=""
                      className="h-6 mr-2"
                    />{" "}
                    Clothing
                  </Link>
                  <Link
                    to="/shop"
                    className="flex items-center p-3 border rounded-lg hover:border-Primary"
                  >
                    <img
                      src="src/assets/imgs/theme/icons/icon-3.svg"
                      alt=""
                      className="h-6 mr-2"
                    />{" "}
                    Pet Foods
                  </Link>
                  <Link
                    to="/shop"
                    className="flex items-center p-3 border rounded-lg hover:border-Primary"
                  >
                    <img
                      src="src/assets/imgs/theme/icons/icon-4.svg"
                      alt=""
                      className="h-6 mr-2"
                    />{" "}
                    Baking Material
                  </Link>
                </div>
              )}
            </div>
            {/* Main Menu */}
            <nav className="font-quicksand text-base">
              <ul className="flex space-x-6 text-Text_Primary">
                <li>
                  <Link
                    to="/shop"
                    className="flex items-center hover:text-Primary"
                  >
                    <img
                      className="mr-2"
                      src="src/assets/imgs/theme/icons/icon-hot.svg"
                    />{" "}
                    Hot Deals
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-Primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-Primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-Primary">
                    Shop
                  </Link>
                </li>

                <li
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                  className=""
                >
                  <button className="hover:text-Primary flex items-center">
                    Mega Menu <i className="fi-rs-angle-down ml-2"></i>
                  </button>
                  {megaMenuOpen && (
                    <div className="absolute left-16 w-11/12 bg-white z-50 border flex justify-between rounded-lg px-9 p-6">
                      <div className="font-lato text-left">
                        <h4 className="text-Primary hover:text-Secondary mb-5 font-bold text-xl">
                          Fruit & Vegetables
                        </h4>
                        <ul>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Meat & Poultry
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Fresh Vegetables
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Herbs & Seasonings
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Cuts & Sprouts
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Exotic Fruits & Veggies
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Packed Produce
                          </li>
                        </ul>
                      </div>
                      <div className="font-lato text-left">
                        <h4 className="text-Primary hover:text-Secondary mb-5 font-bold text-lg">
                          Breakfast & Dairy
                        </h4>
                        <ul>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Milk & Flavoured Milk
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Butter and Margarine
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Eggs Substitutes
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Marmalades
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Sour Cream
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Cheese
                          </li>
                        </ul>
                      </div>
                      <div className="font-lato text-left">
                        <h4 className="text-Primary hover:text-Secondary mb-5 font-bold text-xl">
                          Fruit & Vegetables
                        </h4>
                        <ul>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Meat & Poultry
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Fresh Vegetables
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Herbs & Seasonings
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Cuts & Sprouts
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Exotic Fruits & Veggies
                          </li>
                          <li className="text-Text_Secondary mb-1 hover:text-Primary">
                            Packed Produce
                          </li>
                        </ul>
                      </div>
                      <div className="relative font-roboto sub-mega-menu w-1/3 rounded-lg flex flex-col items-center">
                        <h4 className="absolute left-6 top-10 text-gray-900 font-light text-lg">
                          HOT DEALS
                        </h4>
                        <img
                          src="src/assets/imgs/banner/banner-menu.png"
                          alt="Hot Deals"
                          className="w-full rounded-lg my-2"
                        />
                        <p className="absolute bottom-52 text-xl left-6 text-black font-bold text-center">
                          Dont's miss
                        </p>
                        <p className="absolute bottom-44 text-xl left-6 text-black font-bold text-center">
                          Tending.
                        </p>
                        <p className="absolute bottom-[150px] text-xl left-6 text-green-600 font-bold text-center">
                          Save up to 50%
                        </p>
                        <button className="absolute bottom-24 left-8 bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-2 w-auto">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  )}
                </li>
                {/* Main Menu Item */}
                <li
                  className="relative cursor-pointer group"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <p className="hover:text-green-500 flex items-center">
                    Pages<i className="fi-rs-angle-down ml-2"></i>
                  </p>

                  {/* Submenu */}
                  <ul
                    className={`absolute pl-6 mt-2 py-4 w-48 bg-white border z-10 text-Text_Secondary text-left border-gray-200 shadow-md rounded-md transition-all duration-300 ${
                      open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <li className="mb-1">
                      <Link to="/about" className="hover:text-Primary">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="/contact" className="hover:text-Primary">
                        Contact
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="/account" className="hover:text-Primary">
                        My Account
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="/login" className="hover:text-Primary">
                        Login
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="/register" className="hover:text-Primary">
                        Register
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="/purchaseGuide" className="hover:text-Primary">
                        Purchase Guide
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="/tos" className="hover:text-Primary">
                        Terms of Service
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="Ooiii" className="hover:text-Primary">
                        404 Page
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-Primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Hotline */}
          <div className="hidden lg:flex items-center space-x-2 text-gray-700">
            <img
              src="src/assets/imgs/theme/icons/icon-headphone.svg"
              alt="hotline"
              className="h-10"
            />
            <p className="text-lg font-bold text-Primary leading-none">
              1900 - 888{" "}
              <span className="block text-Text_Secondary text-[10px]">
                24/7 Support Center
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
