import React, { useState } from "react";

const wishlistProducts = [
  {
    id: 1,
    image: "src/assets/imgs/shop/thumbnail-1.jpg",
    title: "Field Roast Chao Cheese Creamy Original",
    price: "$2.51",
    stock: "In Stock",
    action: "Add To Cart",
  },
  {
    id: 2,
    image: "src/assets/imgs/shop/thumbnail-2.jpg",
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$3.23",
    stock: "In Stock",
    action: "Add To Cart",
  },
  {
    id: 3,
    image: "src/assets/imgs/shop/thumbnail-3.jpg",
    title: "Fresh Organic Mustard Leaves Bell Pepper",
    price: "$2.15",
    stock: "In Stock",
    action: "Add To Cart",
  },
  {
    id: 4,
    image: "src/assets/imgs/shop/thumbnail-4.jpg",
    title: "Angie’s Boomchickapop Sweet & Salty",
    price: "$2.82",
    stock: "Out of stock",
    action: "Contact Us",
  },
  {
    id: 5,
    image: "src/assets/imgs/shop/thumbnail-5.jpg",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$3.17",
    stock: "In Stock",
    action: "Add To Cart",
  },
];

const Wishlist = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Toggle all checkboxes
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedProducts([]); // Deselect all
    } else {
      setSelectedProducts(wishlistProducts.map((product) => product.id)); // Select all
    }
    setSelectAll(!selectAll);
  };

  // Toggle individual checkbox
  const handleSelectProduct = (id) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-2">Your Wishlist</h2>
      <p className="text-gray-500 mb-4">
        There are{" "}
        <span className="text-green-500 font-semibold">
          {wishlistProducts.length}
        </span>{" "}
        products in this list
      </p>

      <div className="overflow-x-auto bg-white p-4 rounded-lg ">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="cursor-pointer"
                />
              </th>
              <th className="p-3 text-left">Products</th>
              <th className="p-3">Unit Price</th>
              <th className="p-3">Stock Status</th>
              <th className="p-3">Action</th>
              <th className="p-3">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistProducts.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelectProduct(product.id)}
                    className="cursor-pointer"
                  />
                </td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 rounded"
                  />
                  <span>{product.title}</span>
                </td>
                <td className="p-3 text-green-600 font-bold">
                  {product.price}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      product.stock === "In Stock"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    className={`px-4 py-1 text-white rounded ${
                      product.stock === "Out of stock"
                        ? "bg-gray-800"
                        : "bg-green-500"
                    }`}
                  >
                    {product.action}
                  </button>
                </td>
                <td className="p-3 text-gray-400 cursor-pointer">
                  <i className="fi-rs-cross"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Wishlist;
