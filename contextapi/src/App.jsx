import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";

import { Myshop } from "./context/Shopcontext";
import { ProductContext } from "./context/Productcontext";

const App = () => {
  let { toggle, cartitem, setToggle, setCartitem } = useContext(Myshop);
  const { product } = useContext(ProductContext);

  return (
    <div className="min-h-screen bg-[#070B18] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0B7DFF20,transparent_35%),radial-gradient(circle_at_bottom_right,#F52D6320,transparent_35%),radial-gradient(circle_at_center,#46C76A10,transparent_45%)] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        {toggle ? (
          <Cart />
        ) : (
          <div className="max-w-[1500px] mx-auto px-8 py-12">
            <h1 className="text-5xl font-extrabold text-center mb-3">
              Discover Products
            </h1>

            <p className="text-center text-slate-400 mb-12 text-lg">
              Premium collection inspired by your brand colors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {product.map((elem) => (
                <Product
                  key={elem.id}
                  product={elem}
                  setCartitem={setCartitem}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
