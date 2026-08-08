import React, { useContext } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { MyCartItem } from "../context/CartItem";
const Products = ({ prd, isincart }) => {
  let { setCartitems, incrementproduct, decrementproduct } =
    useContext(MyCartItem);

  let addtocart = () => {
    setCartitems((prev) => [...prev, { ...prd, quantity: 1 }]);
    alert("Product added to cart");
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={prd.image}
          alt={prd.title}
          className="h-52 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {prd.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {prd.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">{prd.description}</p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="font-semibold text-gray-700">
              {prd.rating.rate}
            </span>
            <span className="text-gray-400 text-sm">({prd.rating.count})</span>
          </div>

          {/* Price */}
          <h3 className="text-2xl font-bold text-green-600">${prd.price}</h3>
        </div>

        {/* Button */}
        {isincart ? (
          <div className="w-full mt-2 flex items-center justify-center gap-4 bg-gray-100 rounded-xl py-2 border border-gray-300 shadow-sm">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-xl font-bold text-red-500 hover:bg-red-500 hover:text-white transition"
              onClick={() => {
                decrementproduct(prd.id);
              }}
            >
              −
            </button>

            <span className="text-lg font-bold text-gray-800 min-w-[30px] text-center">
              {isincart.quantity}
            </span>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-xl font-bold text-green-500 hover:bg-green-500 hover:text-white transition"
              onClick={() => {
                incrementproduct(prd.id);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="w-full mt-2 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            onClick={addtocart}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
