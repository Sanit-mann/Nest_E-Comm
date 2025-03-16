import React from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    image: "src/assets/imgs/banner/banner-1.png",
    title: "Everyday Fresh & Clean with Our Products",
    link: "/shop",
  },
  {
    image: "src/assets/imgs/banner/banner-2.png",
    title: "Make your Breakfast Healthy and Easy",
    link: "/shop",
  },
  {
    image: "src/assets/imgs/banner/banner-3.png",
    title: "The best Organic Products Online",
    link: "/shop",
  },
];

const Banner5 = () => {
  return (
    <div className="container py-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="bg-cover bg-center h-80 rounded-lg flex items-center justify-start p-6"
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <div className=" p-4 rounded-lg w-60">
            <h4 className="text-2xl font-lato text-Text_Primary leading-none transition-all duration-300 hover:-translate-y-1.5 font-semibold mb-4">
              {banner.title}
            </h4>
            <Link
              to={banner.link}
              className="bg-Primary font-lato mt-10 transition-all hover:bg-Secondary hover:gap-5 font-semibold text-sm text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 w-fit"
            >
              <span>Shop Now</span>
              <i className="fi-rs-arrow-small-right"></i>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner5;
