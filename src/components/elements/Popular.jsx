import React, { useState } from "react";

const categories = [
  "All",
  "Milks & Dairies",
  "Coffes & Teas",
  "Pet Foods",
  "Meats",
  "Vegetables",
  "Fruits",
];

const products = [
  {
    id: 1,
    name: "Seeds of Change Organic Quinoa",
    category: "Snack",
    price: "$28.85",
    oldPrice: "$32.8",
    label: "Hot",
    img: "src/assets/imgs/shop/1.png",
  },
  {
    id: 2,
    name: "All Natural Italian-Style Chicken Meatballs",
    category: "Hodo Foods",
    price: "$52.85",
    oldPrice: "$55.8",
    label: "Sale",
    img: "src/assets/imgs/shop/2.png",
  },
  {
    id: 3,
    name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    category: "Snack",
    price: "$48.85",
    oldPrice: "$52.8",
    img: "src/assets/imgs/shop/3.png",
    label: "New",
  },
  {
    id: 4,
    name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    category: "Vegetables",
    price: "$17.85",
    oldPrice: "$19.8",
    img: "src/assets/imgs/shop/4.png",
  },
  {
    id: 5,
    name: "Blue Diamond Almonds Lightly Salted Vegetables",
    category: "Pet Foods",
    price: "$23.85",
    oldPrice: "$25.8",
    label: "-14%",
    img: "src/assets/imgs/shop/5.png",
  },
  {
    id: 6,
    name: "Chobani Complete Vanilla Greek Yogurt",
    category: "Hodo Foods",
    price: "$28.85",
    oldPrice: "$32.8",
    img: "src/assets/imgs/shop/6.png",
  },
  {
    id: 7,
    name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
    category: "Meats",
    price: "$52.85",
    oldPrice: "$55.8",
    img: "src/assets/imgs/shop/7.png",
  },
  {
    id: 8,
    name: "Encore Seafoods Stuffed Alaskan Salmon",
    category: "Snack",
    price: "$48.85",
    oldPrice: "$52.8",
    label: "Sale",
    img: "src/assets/imgs/shop/8.png",
  },
  {
    id: 9,
    name: "Gorton’s Beer Battered Fish Fillets with soft paper",
    category: "Coffes",
    price: "$17.85",
    oldPrice: "$19.8",
    label: "Hot",
    img: "src/assets/imgs/shop/9.png",
  },
  {
    id: 10,
    name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    category: "Cream",
    price: "$23.85",
    oldPrice: "$25.8",
    img: "src/assets/imgs/shop/10.png",
  },
];

const Popular = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="container font-quicksand mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-4xl font-bold">Popular Products</h3>
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-Text-Secondary hover:text-Primary transition-all duration-300 hover:-translate-y-1.5 font-bold ${
                activeCategory === category ? "text-Primary font-bold" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border  hover:shadow-lg rounded-2xl p-4 relative"
          >
            {product.label && (
              <span
                className={`absolute top-0 left-0 text-white px-3 py-1 rounded-tl-2xl rounded-br-2xl ${
                  product.label === "Hot"
                    ? "bg-pink-500"
                    : product.label === "Sale"
                    ? "bg-blue-500"
                    : product.label === "New"
                    ? "bg-green-500"
                    : "bg-orange-500"
                }`}
              >
                {product.label}
              </span>
            )}
            <div className="h-60 flex items-center justify-center text-gray-300 text-xl">
              <img
                src={product.img}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">{product.category}</p>
            <h4 className="font-semibold text-lg">{product.name}</h4>
            <div className="flex justify-between items-center mt-2">
              <p className="text-Primary font-bold">
                {product.price}{" "}
                <span className="text-gray-400 line-through ml-2">
                  {product.oldPrice}
                </span>
              </p>
              <button className="bg-Primary hover:bg-Secondary text-white px-3 py-1 rounded flex items-center space-x-2">
                <span>Add</span>
                <i className="fi fi-rs-shopping-cart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
