import React, { useContext } from "react";
import { MyCartItem } from "../context/CartItem";

import { Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { MyNavigation } from "../context/CartNavigation";

const Cart = () => {
  let {
    cartitems,
    incrementproduct,
    decrementproduct,
    removeproduct,
    proceedtocheckout,
  } = useContext(MyCartItem);

  let { setIscartopen } = useContext(MyNavigation);

  const total = cartitems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-10">
          <ShoppingBag className="text-blue-600" size={34} />
          <h1 className="text-4xl font-bold text-slate-800">Shopping Cart</h1>
        </div>

        {cartitems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg py-24 flex flex-col items-center">
            <ShoppingBag size={70} className="text-gray-300" />
            <h2 className="text-2xl font-semibold mt-5 text-gray-600">
              Your cart is empty
            </h2>
            <p className="text-gray-400 mt-2">
              Add some amazing products to get started.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2 space-y-5">
              {cartitems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-xl transition"
                >
                  <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-slate-800 line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-2xl font-bold text-green-600 mt-2">
                      ${item.price}
                    </p>

                    <div className="flex items-center justify-between mt-5">
                      {/* {/* Quantity */}
                      <div className="flex items-center border rounded-xl overflow-hidden">
                        <button
                          className="p-3 hover:bg-gray-100"
                          onClick={() => {
                            decrementproduct(item.id);
                          }}
                        >
                          <Minus size={18} />
                        </button>

                        <span className="px-5 font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          className="p-3 hover:bg-gray-100"
                          onClick={() => incrementproduct(item.id)}
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        className="flex items-center gap-2 text-red-500 hover:text-red-700"
                        onClick={() => {
                          removeproduct(item.id);
                        }}
                      >
                        <Trash2 size={20} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Items</span>
                  <span>{cartitems.length}</span>
                </div>

                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <hr className="my-5" />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  className="mt-8 w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
                  onClick={() => {
                    proceedtocheckout();
                  }}
                >
                  Proceed to Checkout
                </button>

                <button
                  className="mt-3 w-full border border-gray-300 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
                  onClick={() => {
                    setIscartopen(false);
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
