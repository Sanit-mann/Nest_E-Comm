import { useState } from "react";

const ShopSidebar = () => {
  const [price, setPrice] = useState(50); // Default price

  return (
    <aside className="w-full bg-white p-5 rounded-lg">
      {/* Filter Items Section */}
      <div className="border p-5 rounded-lg mb-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Filter Items</h3>

        {/* Price Range */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">Price Range:</p>
          <p className="text-green-600 font-semibold">${price}</p>
          <input
            type="range"
            min="16"
            max="173"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="w-full mt-2 appearance-none h-2 bg-gray-300 rounded-lg outline-none slider-thumb"
          />
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold">
          Filter
        </button>
      </div>

      {/* Popular Items Section */}
      <div className="border p-5 rounded-lg mb-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Popular Items</h3>
        {[
          {
            name: "Seeds of Change Organic",
            price: "$2.51",
            oldPrice: "$2.80",
            rating: "⭐ 4.0",
            img: "src/assets/imgs/shop/thumbnail-1.jpg",
          },
          {
            name: "Quinoa, Brown, & Red Rice",
            price: "$2.51",
            oldPrice: "$2.80",
            rating: "⭐ 4.0",
            img: "src/assets/imgs/shop/thumbnail-2.jpg",
          },
          {
            name: "Change Organic Quinoa, Brown",
            price: "$2.51",
            oldPrice: "$2.80",
            rating: "⭐ 4.0",
            img: "src/assets/imgs/shop/thumbnail-3.jpg",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-3 mb-4">
            <img src={item.img} alt={item.name} className="w-16 h-16 rounded" />
            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-green-600 font-bold">{item.price}</p>
              <p className="text-xs text-gray-500 line-through">
                {item.oldPrice}
              </p>
              <p className="text-xs">{item.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Tags Section */}
      <div className="border p-5 rounded-lg mb-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Popular Items</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Cabbage",
            "Broccoli",
            "Smoothie",
            "Fruit",
            "Eat",
            "Salad",
            "Appetizer",
          ].map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-green-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Promotion Banner */}
      <div className="relative border rounded-lg overflow-hidden shadow-lg">
        <img
          src="src/assets/imgs/banner/banner-11.png"
          alt="Promo"
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-5 ">
          <p className="text-sm text-green-600">Summer Deals</p>
          <h4 className="text-lg font-semibold">TOP HEALTHY FOOD</h4>
          <p className="text-xs text-gray-600">Get 35% OFF on selected items</p>
          <button className="mt-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
