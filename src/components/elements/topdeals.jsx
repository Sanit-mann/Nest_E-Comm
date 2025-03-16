import React from "react";

const topDeals = {
  "Top Selling": [
    {
      id: 1,
      image: "src/assets/imgs/shop/5.png",
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      price: "$2.51",
      oldPrice: "$2.80",
    },
    {
      id: 2,
      image: "src/assets/imgs/shop/cat-3.png",
      title: "Organic 100% Grassfed 85_15 Ground Beef",
      price: "$2.51",
      oldPrice: "$2.80",
    },
    {
      id: 3,
      image: "src/assets/imgs/shop/product-1-1.jpg",
      title: "Naturally Flavored Salted Caramel Light Roast Coffee",
      price: "$2.51",
      oldPrice: "$2.80",
    },
  ],
  "Trending Products": [
    {
      id: 4,
      image: "src/assets/imgs/shop/cat-6.png",
      title: "Organic Cage-Free Grade A Large Brown Eggs",
      price: "$2.51",
      oldPrice: "$2.80",
    },
    {
      id: 5,
      image: "src/assets/imgs/shop/6.png",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      price: "$2.51",
      oldPrice: "$2.80",
    },
    {
      id: 6,
      image: "src/assets/imgs/shop/product-3-1.jpg",
      title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      price: "$2.51",
      oldPrice: "$2.80",
    },
  ],
  "Recently Added": [
    {
      id: 7,
      image: "src/assets/imgs/shop/7.png",
      title: "Organic Frozen Triple Berry Blend",
      price: "$2.51",
      oldPrice: "$2.80",
    },
    {
      id: 8,
      image: "src/assets/imgs/shop/cat-5.png",
      title: "Pepperidge Farm Farmhouse Hearty White Bread",
      price: "$2.51",
      oldPrice: "$2.80",
    },
    {
      id: 9,
      image: "src/assets/imgs/shop/product-6-1.jpg",
      title: "Oroweat Country Buttermilk Bread",
      price: "$2.51",
      oldPrice: "$2.80",
    },
  ],
  "Top Rated": [
    {
      id: 10,
      image: "src/assets/imgs/shop/cat-2.png",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      price: "$2.51",
      oldPrice: "$2.80",
    },
    {
      id: 11,
      image: "src/assets/imgs/shop/product-11-1.jpg",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      price: "$2.51",
      oldPrice: "$2.80",
    },
    {
      id: 12,
      image: "src/assets/imgs/shop/8.png",
      title: "All Natural Italian-Style Chicken Meatballs",
      price: "$2.51",
      oldPrice: "$2.80",
    },
  ],
};

const TopDeals = () => {
  return (
    <section className="py-10 font-quicksand px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(topDeals).map(([category, products]) => (
          <div key={category} className=" border-[1px] p-5 rounded-lg">
            <h4 className="text-xl font-bold text-Text_Primary mb-10">
              {category}
            </h4>
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-2 space-x-4"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-contain rounded-md"
                  />
                  <div>
                    <h5 className="text-sm font-semibold transition-all mb-2 duration-300 hover:-translate-y-1.5 text-Text_Primary">
                      {product.title}
                    </h5>
                    <p className="text-sm text-Primary font-bold">
                      {product.price}{" "}
                      <span className="text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDeals;
