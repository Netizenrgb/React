import React, { useContext } from "react";
import { Myshop } from "../context/Shopcontext";

const Cart = () => {
  const { cartitem } = useContext(Myshop);

  const total = cartitem.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="min-h-screen bg-[#070B18] px-8 py-10 text-white">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-[#111827] border border-[#46C76A]/20 rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-8">🛒 Your Shopping Cart</h1>

          {cartitem.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[500px]">
              <div className="text-8xl mb-5">🛍️</div>

              <h2 className="text-3xl font-bold text-white">
                Your Cart is Empty
              </h2>

              <p className="text-slate-400 mt-3">
                Looks like you haven't added anything yet.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartitem.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#161F2D] border border-transparent hover:border-[#0B7DFF] rounded-2xl p-5 flex items-center gap-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(11,125,255,0.25)]"
                >
                  {/* Image */}

                  <div className="w-32 h-32 rounded-2xl bg-[#0F172A] flex items-center justify-center p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full object-contain transition duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}

                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-wider bg-[#46C76A]/20 text-[#46C76A] px-3 py-1 rounded-full">
                      {item.category}
                    </span>

                    <h2 className="text-xl font-bold mt-3 line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-slate-400 mt-2">
                      Quantity :
                      <span className="ml-2 font-semibold text-white">
                        {item.quantity || 1}
                      </span>
                    </p>
                  </div>

                  {/* Price */}

                  <div className="text-right">
                    <p className="text-sm text-slate-400">Price</p>

                    <h3 className="text-3xl font-bold text-[#FFAA2C]">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}

        <div className="bg-[#111827] border border-[#46C76A]/20 rounded-3xl p-8 h-fit sticky top-28 shadow-xl">
          <h2 className="text-3xl font-bold mb-8">Order Summary</h2>

          <div className="space-y-5">
            <div className="flex justify-between text-slate-300">
              <span>Total Items</span>
              <span>{cartitem.length}</span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>Shipping</span>
              <span className="text-[#46C76A] font-semibold">FREE</span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>Tax</span>
              <span>$0.00</span>
            </div>

            <hr className="border-slate-700" />

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">Total</span>

              <span className="text-4xl font-extrabold text-[#FFAA2C]">
                ${total.toFixed(2)}
              </span>
            </div>

      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
