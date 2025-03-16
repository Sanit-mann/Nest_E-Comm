import React from "react";

const ProductCompare = () => {
  const products = [
    {
      id: 1,
      image: "src/assets/imgs/shop/product-16-4.jpg",
      name: "Field Roast Chao Cheese Creamy Original",
      price: "$2.51",
      rating: 4.0,
      description:
        "Nulla convallis nibh lectus, a condimentum tellus commodo ut.",
      weight: "450 gram",
      stock: "In Stock",
    },
    {
      id: 2,
      image: "src/assets/imgs/shop/product-16-5.jpg",
      name: "Angie’s Boomchickapop Sweet & Salty",
      price: "$2.82",
      rating: 4.0,
      description:
        "Nulla convallis nibh lectus, a condimentum tellus commodo ut.",
      weight: "450 gram",
      stock: "In Stock",
    },
    {
      id: 3,
      image: "src/assets/imgs/shop/product-16-6.jpg",
      name: "Foster Farms Takeout Crispy Classic",
      price: "$3.17",
      rating: 4.0,
      description:
        "Nulla convallis nibh lectus, a condimentum tellus commodo ut.",
      weight: "450 gram",
      stock: "In Stock",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-4xl font-roboto ml-20 mt-20 font-bold mb-2">
        Products Compare
      </h2>
      <p className="text-Text_Secondary ml-20 mb-6">
        You have selected{" "}
        <span className="text-green-500 font-semibold">3</span> products to
        compare
      </p>

      <div className="overflow-x-auto bg-white p-6 rounded-lg">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className=" text-Text_Secondary uppercase text-sm">
              <th className="p-4">Preview</th>
              {products.map((product) => (
                <th key={product.id} className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-44 mx-auto"
                  />
                  <p className="mt-2 font-semibold">{product.name}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Price", "Rating", "Description", "Weight", "Stock status"].map(
              (field, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4 font-semibold">{field}</td>
                  {products.map((product, i) => (
                    <td key={i} className="p-4">
                      {field === "Price" ? (
                        <span className="text-green-600 font-bold">
                          {product.price}
                        </span>
                      ) : field === "Rating" ? (
                        <span>⭐⭐⭐⭐⭐ ({product.rating})</span>
                      ) : field === "Description" ? (
                        <p className="text-gray-500">{product.description}</p>
                      ) : field === "Weight" ? (
                        <p>{product.weight}</p>
                      ) : field === "Stock status" ? (
                        <span className="px-2 py-1 bg-green-100 text-green-600 rounded">
                          {product.stock}
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
              )
            )}
            <tr className="border-t">
              <td className="p-4 font-semibold">Add to cart</td>
              {products.map((product) => (
                <td key={product.id} className="p-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Add To Cart
                  </button>
                </td>
              ))}
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">Remove</td>
              {products.map((product) => (
                <td
                  key={product.id}
                  className="p-4 text-gray-400 cursor-pointer"
                >
                  <i className="fi-rs-cross"></i>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductCompare;
