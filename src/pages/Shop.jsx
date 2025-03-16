import React from "react";
import ShopSidebar from "../components/elements/shopSidebar";

const products = [
  {
    id: 1,
    image: "src/assets/imgs/shop/product-11-1.jpg",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 2,
    image: "src/assets/imgs/shop/product-12-1.jpg",
    title: "Blue Diamond Almonds Lightly Salted Packing Paper",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 3,
    image: "src/assets/imgs/shop/product-13-1.jpg",
    title: "Field Roast Chao Cheese Creamy Original",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 4,
    image: "src/assets/imgs/shop/product-11-2.jpg",
    title: "Fresh Tuna Steak",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 5,
    image: "src/assets/imgs/shop/product-15-1.jpg",
    title: "Fresh Cod Fillet",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 6,
    image: "src/assets/imgs/shop/product-16-1.jpg",
    title: "Roast Beef Slices",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 7,
    image: "src/assets/imgs/shop/product-3-1.jpg",
    title: "Beetroot Fresh",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 8,
    image: "src/assets/imgs/shop/product-2-1.jpg",
    title: "Sweet Corn Whole",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 9,
    image: "src/assets/imgs/shop/product-1-1.jpg",
    title: "Oranges Fresh",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 10,
    image: "src/assets/imgs/shop/product-5-1.jpg",
    title: "Mini Sweet Peppers",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 11,
    image: "src/assets/imgs/shop/product-7-1.jpg",
    title: "Fresh Yellow Lemons",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
  {
    id: 12,
    image: "src/assets/imgs/shop/product-6-1.jpg",
    title: "Pizza with Vegetables & Cheese",
    price: "$2.51",
    oldPrice: "$2.90",
    rating: 4.0,
    weight: "500 gram",
  },
];

function Shop() {
  return (
    <>
      <section>
        <section className="relative h-auto rounded-3xl py-10 mt-10 px-6 lg:px-16">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              backgroundImage: "url(src/assets/imgs/banner/banner-12.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-green-300 opacity-20 rounded-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Left Content */}
            <div className="text-center font-quicksand md:text-left">
              <h2 className="text-3xl md:text-5xl font-semibold text-Text_Primary mt-10 mb-4 leading-tight">
                Shop
              </h2>
            </div>
          </div>
        </section>
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-[20%_auto]">
          <div>
            <ShopSidebar />
          </div>
          <section className="p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-Text_Secondary">
                There are{" "}
                <span className="text-Primary font-semibold">568</span> products
                in this category
              </p>
              <div className="flex gap-4 text-gray-500 text-sm">
                <span>Show: 50</span>
                <span>Sort by: Featured</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border-[1px] p-4 rounded-lg hover:shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 object-cover rounded-md"
                  />
                  <h3 className="text-Text_Primary font-semibold mt-2">
                    {product.title}
                  </h3>
                  <p className="text-Text_Secondary text-sm">
                    {product.weight}
                  </p>
                  <div className="flex mt-5 items-center justify-between">
                    <p className="text-Primary font-bold">
                      {product.price}{" "}
                      <span className="text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    </p>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-md mt-2">
                      Add +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-start font-bold mt-6 space-x-2">
              <button className="px-4 py-2 text-white bg-Primary rounded-full">
                1
              </button>
              <button className="px-4 py-2 text-Text_Secondary hover:bg-Primary hover:text-white bg-gray-300 rounded-full">
                2
              </button>
              <button className="px-4 py-2 text-Text_Secondary hover:bg-Primary hover:text-white bg-gray-300 rounded-full">
                3
              </button>
              <button className="px-4 py-2 text-Text_Secondary hover:bg-Primary hover:text-white bg-gray-300 rounded-full">
                &rarr;
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Shop;
