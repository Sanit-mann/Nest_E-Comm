import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const IntroSlider = () => {
  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom_prev_i1",
          nextEl: ".custom_next_i1",
        }}
        className="w-full"
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <div
            className="h-[500px] font-lato bg-cover bg-center flex items-center rounded-[40px] justify-center text-center"
            style={{
              backgroundImage: "url(src/assets/imgs/slider/slider-1.png)",
            }}
          >
            <div className="absolute left-0  ml-10 p-8 text-left rounded-lg text-Text_Primary ">
              <h1 className="font-lato text-4xl md:text-7xl font-bold mb-4">
                Don’t miss amazing <br /> grocery deals
              </h1>
              <p className="text-lg md:text-2xl font-semibold text-Text_Secondary mb-6">
                Sign up for the daily newsletter
              </p>
              <form className="flex flex-col md:flex-row items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-3 rounded-md w-full md:h-14 rounded-l-full md:w-72 text-black"
                />
                <button className="bg-green-500 md:h-14 hover:bg-green-600 text-white px-6 py-3 -ml-11 rounded-full">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-[500px] font-lato bg-cover bg-center flex rounded-[40px] items-center justify-center text-center"
            style={{
              backgroundImage: "url(src/assets/imgs/slider/slider-2.png)",
            }}
          >
            <div className="absolute left-0   ml-10 p-8 text-left rounded-lg text-Text_Primary ">
              <h1 className="font-lato text-4xl md:text-7xl font-bold mb-4">
                Fresh Vegitables <br /> Big Discount
              </h1>
              <p className="text-lg md:text-2xl font-semibold text-Text_Secondary mb-6">
                Save upto 50% off on your first order.
              </p>
              <form className="flex flex-col md:flex-row items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-3 rounded-md w-full md:h-14 rounded-l-full md:w-72 text-black"
                />
                <button className="bg-green-500 md:h-14 hover:bg-green-600 text-white px-6 py-3 -ml-11 rounded-full">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between z-10">
        <button className="custom_prev_i1 bg-Primary hover:bg-Secondary p-3 w-12 h-12 flex items-center justify-center text-white rounded-full">
          ❮
        </button>
        <button className="custom_next_i1 bg-Primary hover:bg-Secondary p-3 w-12 h-12 flex items-center justify-center text-white rounded-full">
          ❯
        </button>
      </div>
    </div>
  );
};

export default IntroSlider;
