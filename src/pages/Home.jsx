import Intro1 from "../components/sliders/Intro1";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Banner5 from "../components/elements/Banner5";
import Popular from "../components/elements/Popular";
import FeatchTabSlider from "../components/elements/fetchTabSlider";
import DealsOfTheDays from "../components/elements/deals";
import TopDeals from "../components/elements/topdeals";

const categories = [
  {
    name: "Cake & Milk",
    img: "src/assets/imgs/shop/cat-1.png",
    bg: "bg-yellow-100",
  },
  {
    name: "Organic Kiwi",
    img: "src/assets/imgs/shop/cat-2.png",
    bg: "bg-green-100",
  },
  {
    name: "Peach",
    img: "src/assets/imgs/shop/cat-3.png",
    bg: "bg-orange-100",
  },
  {
    name: "Red Apple",
    img: "src/assets/imgs/shop/cat-4.png",
    bg: "bg-red-100",
  },
  {
    name: "Snack",
    img: "src/assets/imgs/shop/cat-5.png",
    bg: "bg-pink-100",
  },
  {
    name: "Vegetables",
    img: "src/assets/imgs/shop/cat-6.png",
    bg: "bg-purple-100",
  },
  {
    name: "Strawberry",
    img: "src/assets/imgs/shop/cat-7.png",
    bg: "bg-green-200",
  },
  {
    name: "Black Plum",
    img: "src/assets/imgs/shop/cat-8.png",
    bg: "bg-gray-200",
  },
  {
    name: "Custard Apple",
    img: "src/assets/imgs/shop/cat-9.png",
    bg: "bg-blue-100",
  },
  {
    name: "Coffee & Tea",
    img: "src/assets/imgs/shop/cat-10.png",
    bg: "bg-yellow-200",
  },
];

export default function Home() {
  return (
    <>
      <div>
        <div className=" relative my-8">
          <Intro1 />
        </div>
        <section className="relative font-quicksand py-8">
          <div className="container px-4">
            <div className="flex justify-between items-center">
              <div className="flex font-lato items-end gap-5 mb-6">
                <h3 className="text-4xl text-Text_Primary font-semibold">
                  Featured Categories
                </h3>
                <ul className="flex space-x-4 font-bold text-Text_Primary">
                  <li className="transition-all duration-300 hover:-translate-y-1.5">
                    <Link to="/products" className="hover:text-green-600">
                      Cake & Milk
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:-translate-y-1.5">
                    <Link to="/products" className="hover:text-green-600">
                      Coffees & Teas
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:-translate-y-1.5">
                    <Link to="/products" className="hover:text-green-600">
                      Pet Foods
                    </Link>
                  </li>
                  <li className="transition-all duration-300 hover:-translate-y-1.5">
                    <Link to="/products" className="hover:text-green-600">
                      Vegetables
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end space-x-2">
                <button className="prev bg-gray-200 p-3 w-10 h-10 flex hover:text-white hover:bg-Primary items-center justify-center rounded-full ">
                  <i className="fi-rs-angle-left"></i>
                </button>
                <button className="next bg-gray-200 p-3 w-10 h-10 flex hover:text-white hover:bg-Primary items-center justify-center rounded-full ">
                  <i className="fi-rs-angle-right"></i>
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              slidesPerView={5}
              spaceBetween={20}
              navigation={{ nextEl: ".next", prevEl: ".prev" }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              className="relative"
            >
              {categories.map((category, index) => (
                <SwiperSlide
                  key={index}
                  className={`${category.bg} rounded-lg p-4 hover:text-Primary text-center group  hover:shadow-xl mb-10 hover:border-Primary transition-all duration-300`}
                >
                  <img
                    src={category.img}
                    alt={category.name}
                    className="mx-auto mb-2 w-24 h-24 transition-transform duration-300 ease-in-out hover:scale-110"
                  />

                  <h4 className="text-lg font-semibold transition-transform duration-300 ">
                    {category.name}
                  </h4>
                  <p className="text-gray-500 transition-transform duration-300 ">
                    26 items
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <Banner5 />
        <Popular />
        <FeatchTabSlider />
        <DealsOfTheDays />
        <TopDeals />
      </div>
    </>
  );
}
