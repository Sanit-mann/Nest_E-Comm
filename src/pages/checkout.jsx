import React from "react";

const Checkout = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-2">Checkout</h2>
      <p className="text-gray-500 mb-4">
        There are <span className="text-green-500 font-semibold">3</span>{" "}
        products in your cart
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h3 className="text-lg font-bold mb-3">Billing Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Last name *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Address 1 *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Address line 2 *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="State / Country *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="City / Town *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Postcode / Zip *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Phone number *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email *"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="p-3 border rounded-md w-full"
            />
          </div>
          <textarea
            placeholder="Additional information"
            className="p-3 border rounded-md w-full mt-4"
          ></textarea>
          <div className="mt-4 flex flex-col gap-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Create an account?
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Ship to a different
              address?
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Your Orders</h3>
          <div className="space-y-4">
            {[
              {
                id: 1,
                name: "Field Roast Chao Cheese Creamy Original",
                price: "$2.51",
                qty: 1,
              },
              {
                id: 2,
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                price: "$5.60",
                qty: 2,
              },
              {
                id: 3,
                name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
                price: "$7.00",
                qty: 1,
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">x {item.qty}</p>
                </div>
                <p className="text-green-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>

          {/* Payment Options */}
          <h3 className="text-lg font-bold mt-4">Payment</h3>
          <div className="space-y-2 mt-2">
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2" checked />{" "}
              Direct bank transfer
            </label>
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2" /> Cash on
              delivery
            </label>
            <div className="flex gap-2 mt-2">
              <img
                src="src/assets/imgs/theme/PayPal.png"
                alt="PayPal"
                className="h-6"
              />
              <img
                src="src/assets/imgs/theme/VISA.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="src/assets/imgs/theme/Zapper.png"
                alt="Zapper"
                className="h-6"
              />
            </div>
          </div>

          {/* Place Order Button */}
          <button className="w-full bg-green-500 text-white p-3 rounded-md mt-4 flex justify-center items-center">
            Place an Order <span className="ml-2">➡️</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
