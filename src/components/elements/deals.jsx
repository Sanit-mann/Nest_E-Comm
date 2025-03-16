import React, { useState, useEffect } from "react";

const deals = [
  {
    id: 1,
    image: "src/assets/imgs/banner/banner-5.png",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    price: "$2.51",
    oldPrice: "$2.80",
    weight: "500 gram",
    countdown: 5 * 24 * 60 * 60 + 6 * 60 * 60 + 56 * 60 + 18, // 5 days 6 hours 56 mins 18 secs
  },
  {
    id: 2,
    image: "src/assets/imgs/banner/banner-6.png",
    title: "Perdue Simply Smart Organics Gluten Free Breaded",
    price: "$2.51",
    oldPrice: "$2.80",
    weight: "500 gram",
    countdown: 5 * 24 * 60 * 60 + 12 * 60 * 60 + 52 * 60 + 17,
  },
  {
    id: 3,
    image: "src/assets/imgs/banner/banner-7.png",
    title: "Signature Wood-Fired Mushroom and Caramelized Red Onion",
    price: "$2.51",
    oldPrice: "$2.80",
    weight: "500 gram",
    countdown: 5 * 24 * 60 * 60 + 5 * 60 * 60 + 56 * 60 + 18,
  },
  {
    id: 4,
    image: "src/assets/imgs/banner/banner-8.png",
    title: "Simply Lemonade with Raspberry Juice",
    price: "$2.51",
    oldPrice: "$2.80",
    weight: "500 gram",
    countdown: 5 * 24 * 60 * 60 + 6 * 60 * 60 + 56 * 60 + 18,
  },
];

function DealsOfTheDays() {
  const [countdowns, setCountdowns] = useState(
    deals.map((deal) => deal.countdown)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns((prevCountdowns) =>
        prevCountdowns.map((time) => (time > 0 ? time - 1 : 0))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  return (
    <section className="py-10 font-quicksand px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-Text_Primary">
          Deals Of The Days
        </h2>
        <a href="#" className="text-Primary font-semibold flex items-center">
          All Deals <i className="fi-rs-angle-right ml-2"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {deals.map((deal, index) => {
          const { days, hours, minutes, secs } = formatTime(countdowns[index]);
          return (
            <div
              key={deal.id}
              className="relative bg-white rounded-xl border-[1px] hover:shadow-lg"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="absolute top-[35%] left-1/4 flex gap-1">
                <div className="bg-white text-center px-2 py-1 rounded-md font-bold text-sm">
                  <p className="text-Primary text-2xl">{days}</p>
                  <p className="text-xs text-Text_Secondary">Days</p>
                </div>
                <div className="bg-white text-center px-2 py-1 rounded-md font-bold text-sm">
                  <p className="text-Primary text-2xl">{hours}</p>
                  <p className="text-xs text-Text_Secondary">Hours</p>
                </div>
                <div className="bg-white text-center px-2 py-1 rounded-md font-bold text-sm">
                  <p className="text-Primary text-2xl">{minutes}</p>
                  <p className="text-xs text-Text_Secondary">Mins</p>
                </div>
                <div className="bg-white text-center px-2 py-1 rounded-md font-bold text-sm">
                  <p className="text-Primary text-2xl">{secs}</p>
                  <p className="text-xs text-Text_Secondary">Sec</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-5 text-Text_Primary">
                  {deal.title}
                </h3>
                <p className="text-sm text-gray-500">{deal.weight}</p>
                <p className="text-lg font-bold mb-5 text-Primary">
                  {deal.price}{" "}
                  <span className="text-gray-400 line-through">
                    {deal.oldPrice}
                  </span>
                </p>
                <button className="w-full bg-Primary hover:bg-Secondary text-white py-2 mt-3 rounded-lg font-semibold">
                  Add +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DealsOfTheDays;
