import { Link } from "react-router-dom";
import React from "react";

const BlogSidebar = () => {
  return (
    <div className="space-y-10">
      {/* Search Box */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your recipes..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <i className="fi-rs-search"></i>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Noodles & Rice", img: "src/assets/imgs/shop/sidebar_1.png" },
          { name: "Fastfood", img: "src/assets/imgs/shop/sidebar_2.png" },
          { name: "Ice Cream", img: "src/assets/imgs/shop/sidebar_3.png" },
          { name: "Vegetables", img: "src/assets/imgs/shop/sidebar_4.png" },
          { name: "Raw Meats", img: "src/assets/imgs/shop/sidebar_5.png" },
          { name: "Dessert", img: "src/assets/imgs/shop/sidebar_6.png" },
        ].map((category, index) => (
          <button
            key={index}
            className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-300 shadow-sm text-gray-800 hover:shadow-md transition"
          >
            <img src={category.img} alt={category.name} className="w-8 h-8" />
            <span
              className={`text-lg font-semibold ${
                category.name === "Ice Cream"
                  ? "text-green-500"
                  : "text-gray-800"
              }`}
            >
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* Trending Now */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h5 className="text-lg font-bold mb-4">Trending now</h5>
        <ul className="space-y-4">
          {[
            {
              title: "Caprese Chicken with Smashed Potatoes",
              author: "Sugar Rosie",
              img: "src/assets/imgs/shop/product-1-1.jpg",
            },
            {
              title: "The Best Soft Chocolate Chip Cookies",
              author: "Sugar Rosie",
              img: "src/assets/imgs/shop/product-2-1.jpg",
            },
            {
              title: "Smoky Beans & Greens Tacos with Aji Verde",
              author: "Laura",
              img: "src/assets/imgs/shop/product-3-1.jpg",
            },
            {
              title: "Harissa Chickpeas with Whipped Feta",
              author: "Olivia",
              img: "src/assets/imgs/shop/product-4-1.jpg",
            },
            {
              title: "Summer Quinoa Salad Jars with Lemon Dill Dressing",
              author: "Emma",
              img: "src/assets/imgs/shop/product-5-1.jpg",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h6 className="text-sm font-semibold">{item.title}</h6>
                <p className="text-xs text-gray-500">
                  {item.author} - 2 hours ago
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h5 className="text-lg font-bold mb-4">Gallery</h5>
        <div className="grid grid-cols-3 gap-2">
          {[
            "src/assets/imgs/shop/thumbnail-1.jpg",
            "src/assets/imgs/shop/thumbnail-2.jpg",
            "src/assets/imgs/shop/thumbnail-3.jpg",
            "src/assets/imgs/shop/thumbnail-4.jpg",
            "src/assets/imgs/shop/thumbnail-5.jpg",
            "src/assets/imgs/shop/thumbnail-6.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              className="w-full h-20 rounded-md object-cover"
            />
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h5 className="text-lg font-bold mb-4">Popular Tags</h5>
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
              className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full cursor-pointer hover:bg-green-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
