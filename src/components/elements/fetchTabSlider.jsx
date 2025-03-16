import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const categories = ["Featured", "Popular", "New added"];

const products = [
  {
    id: 1,
    name: "Angie’s Boomchickapop Sweet and womnies",
    category: "Hodo Foods",
    price: "$238.85",
    oldPrice: "$245.8",
    label: "Sale",
    image: "src/assets/imgs/shop/13.png",
  },
  {
    id: 2,
    name: "Foster Farms Takeout Crispy Classic",
    category: "Hodo Foods",
    price: "$238.85",
    oldPrice: "$245.8",
    label: "Best sale",
    image: "src/assets/imgs/shop/8.png",
  },
  {
    id: 3,
    name: "Blue Diamond Almonds Lightly Salted",
    category: "Hodo Foods",
    price: "$238.85",
    oldPrice: "$245.8",
    label: "Save 15%",
    image: "src/assets/imgs/shop/12.png",
  },
  {
    id: 4,
    name: "Seeds of Change Organic Quinoa, Brown",
    category: "Hodo Foods",
    price: "$238.85",
    oldPrice: "$245.8",
    label: "Save 15%",
    image: "src/assets/imgs/shop/10.png",
  },
  {
    id: 3,
    name: "Blue Diamond Almonds Lightly Salted",
    category: "Hodo Foods",
    price: "$238.85",
    oldPrice: "$245.8",
    label: "Save 15%",
    image: "src/assets/imgs/shop/14.png",
  },
  {
    id: 4,
    name: "Seeds of Change Organic Quinoa, Brown",
    category: "Hodo Foods",
    price: "$238.85",
    oldPrice: "$245.8",
    label: "Save 15%",
    image: "src/assets/imgs/shop/11.png",
  },
];

const FeatchTabSlider = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <div className="container font-quicksand mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-4xl font-bold text-Text-Primary">
          Daily Best Sells
        </h3>
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-gray-600 hover:text-Primary transition-all duration-300 hover:-translate-y-1.5 font-medium ${
                activeCategory === category ? "text-Primary font-bold" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex">
        <div
          className="w-1/4 hidden lg:block h-[510px] p-8 rounded-xl"
          style={{
            backgroundImage: "url(src/assets/imgs/banner/banner-4.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-5xl font-roboto font-bold text-Text_Primary mb-6">
            Bring nature into your home
          </h2>
          <Link
            to="/shop"
            className="bg-Primary font-lato mt-10 transition-all hover:bg-Secondary hover:gap-5 font-semibold text-sm text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 w-fit"
          >
            <span>Shop Now</span>
            <i className="fi-rs-arrow-small-right"></i>
          </Link>
        </div>
        <div className="w-3/4">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1500}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="border rounded-xl p-6 hover:shadow-lg relative h-[460px] mt-5 bg-white transition-transform duration-1500 ease-linear">
                  <span
                    className={`absolute top-0 left-0 text-white px-3 py-1 rounded-tl-xl rounded-br-xl font-medium ${
                      product.label.includes("Save")
                        ? "bg-pink-500"
                        : "bg-orange-500"
                    }`}
                  >
                    {product.label}
                  </span>
                  <div className="h-48 flex items-center justify-center  text-gray-400 text-lg font-bold rounded-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    {product.category}
                  </p>
                  <h4 className="font-semibold text-lg text-Text-Primary leading-tight">
                    {product.name}
                  </h4>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-Primary font-bold text-lg">
                      {product.price}{" "}
                      <span className="text-gray-400 line-through text-sm ml-2">
                        {product.oldPrice}
                      </span>
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-Primary h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">Sold: 90/120</p>
                  <button className="absolute bg-Primary hover:bg-Secondary bottom-4 left-4 text-white w-11/12 mt-3 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                    <i className="fi-rs-shopping-cart-add"></i> Add To Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeatchTabSlider;
