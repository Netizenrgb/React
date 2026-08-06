import React, { useContext } from "react";
import { Myshop } from "../context/Shopcontext";

const Product = ({ product }) => {
  const { setCartitem } = useContext(Myshop);

  return (
    <div className="group bg-[#111827] border border-[#46C76A]/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(11,125,255,0.25)] hover:border-[#0B7DFF] transition-all duration-500 hover:-translate-y-2">
      {/* Product Image */}
      <div className="h-72 bg-gradient-to-br from-[#161F2D] to-[#0F172A] flex items-center justify-center overflow-hidden p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2"
        />
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col gap-4">
        {/* Category */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#46C76A]/20 text-[#46C76A] text-xs font-semibold uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Product Title */}
        <h2 className="text-lg font-bold text-white line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-sm line-clamp-3 h-[72px]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#FFAA2C] text-lg">★</span>

            <span className="text-white font-semibold">
              {product.rating.rate}
            </span>

            <span className="text-slate-500 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-xs text-slate-500">Reviews</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-700">
          <div>
            <p className="text-xs text-slate-500">Price</p>

            <h3 className="text-3xl font-extrabold text-[#FFAA2C]">
              ${product.price}
            </h3>
          </div>

          <button
            onClick={() => {
              setCartitem((prev) => [...prev, product]);
            }}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#0B7DFF] to-[#46C76A] text-white font-semibold hover:scale-105 active:scale-95 transition duration-300 shadow-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
