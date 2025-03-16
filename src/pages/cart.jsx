import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-2">Your Cart</h2>
      <p className="text-gray-500 mb-6">
        There are <span className="text-green-500 font-semibold">5</span>{" "}
        products in your cart
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
        {/* Left Side - Cart Table */}
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                <th className="p-4">
                  <input type="checkbox" />
                </th>
                <th className="p-4 text-left">Products</th>
                <th className="p-4">Unit Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4">Remove</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 1,
                  name: "Field Roast Chao Cheese Creamy Original",
                  price: "$2.51",
                  qty: 1,
                  image: "src/assets/imgs/shop/product-16-4.jpg",
                },
                {
                  id: 2,
                  name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                  price: "$2.80",
                  qty: 1,
                  image: "src/assets/imgs/shop/product-16-5.jpg",
                },
                {
                  id: 3,
                  name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
                  price: "$3.50",
                  qty: 2,
                  image: "src/assets/imgs/shop/product-16-6.jpg",
                },
              ].map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="p-4">
                    <input type="checkbox" />
                  </td>
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded"
                    />
                    {product.name}
                  </td>
                  <td className="p-4 text-green-600 font-bold">
                    {product.price}
                  </td>
                  <td className="p-4">
                    <select className="border rounded-md p-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option
                          key={num}
                          value={num}
                          selected={num === product.qty}
                        >
                          {num}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 text-green-600 font-bold">
                    $
                    {(parseFloat(product.price.slice(1)) * product.qty).toFixed(
                      2
                    )}
                  </td>
                  <td className="p-4 text-gray-400 cursor-pointer">
                    <i className="fi-rs-trash"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side - Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Cart Summary</h3>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="text-green-600 font-bold">$12.31</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping</span>
            <span className="text-gray-500">Free Shipping</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Estimate for</span>
            <span className="text-gray-500">United Kingdom</span>
          </div>
          <div className="flex justify-between mt-2 font-bold text-lg">
            <span>Total</span>
            <span className="text-green-600">$12.31</span>
          </div>
          <Link to="/checkout">
            <button className="w-full bg-Primary hover:bg-Secondary font-bold text-white p-4 rounded-md mt-4 flex justify-center items-center">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Section - Shipping & Coupon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Calculate Shipping</h3>
          <p className="text-gray-500">
            Flat rate: <span className="text-Primary font-semibold">5%</span>
          </p>
          <select className="w-full p-3 border rounded-md mt-3">
            <option>Australia</option>
            <option>Brazil</option>
            <option>Canada</option>
            <option>Denmark</option>
            <option>France</option>
            <option>Germany</option>
            <option>India</option>
            <option>Japan</option>
            <option>United Kingdom</option>
            <option>United States</option>
          </select>
          <input
            type="text"
            placeholder="State / City"
            className="w-full p-3 border rounded-md mt-3"
          />
          <input
            type="text"
            placeholder="Postcode / ZIP"
            className="w-full p-3 border rounded-md mt-3"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Apply Coupon</h3>
          <p className="text-gray-500">Using A Promo Code?</p>
          <div className="flex mt-3">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full p-3 border rounded-l-md"
            />
            <button className="bg-Primary hover:bg-Secondary font-bold text-white px-6 py-3 rounded-r-md">
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
