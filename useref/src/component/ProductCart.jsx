import React from "react";

const ProductCart = ({ displayproduct }) => {
  return (
    <div className="min-h-screen bg-slate-950 p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-950 to-black">
      {/* Grid Container wrapper: items will go next to each other */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Map or duplicate this card structure for each item */}
        <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col gap-4">
          <h1 className="text-lg font-bold text-white tracking-wide text-center">
            The product display is here{" "}
          </h1>

          <div className="w-full h-56 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
            {/* for array */}
            {/* <img src={displayproduct[0]} /> */}
            {/* for obj */}
            <img
              src={displayproduct.image}
              className="max-w-full max-h-full object-contain p-2 filter drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]"
            />
          </div>

          <div className="flex flex-col gap-3 bg-black/20 p-4 rounded-xl border border-white/5 mt-auto">
            {/* for array */}
            {/* <p>Product name is : {displayproduct[1]}</p> */}
            {/* <p>Price is : {displayproduct[2]}</p> */}
            {/* for objs */}
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                Product Name
              </span>
              <p className="text-base font-bold text-white tracking-wide truncate">
                {" "}
                {displayproduct.productname}
              </p>
            </div>

            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                Price
              </span>
              <p className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                {displayproduct.price}
              </p>
            </div>

            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                Category
              </span>
              <p className="inline-block text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                {" "}
                {displayproduct.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
