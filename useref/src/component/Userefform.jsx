import React, { useRef, useState } from "react";

const Userefform = ({ displayproduct, setDisplayproduct }) => {
  const inputref = useRef({});

  let handlesubmit = (e) => {
    e.preventDefault();
    console.log(inputref.current.image.value);
    console.log(inputref.current.productname.value);
    console.log(inputref.current.price.value);
    console.log(inputref.current.category.value);

    // let prd = [
    //   inputref.current.image.value,
    //   inputref.current.productname.value,
    //   inputref.current.price.value,
    //   inputref.current.category.value,
    // ];

    let prd = {
      image: inputref.current.image.value,
      productname: inputref.current.productname.value,
      price: inputref.current.price.value,
      category: inputref.current.category.value,
    };

    console.log("Product array ->", prd);

    setDisplayproduct((prev) => [...prev, prd]);
    console.log("this is prodduct display", displayproduct);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-950 to-black">
      <form
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-5"
        onSubmit={handlesubmit}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Add New Product
          </h2>
          <p className="text-sm text-slate-400">
            Enter product details to publish
          </p>
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Product Image URL
          </label>
          <input
            ref={(e) => (inputref.current.image = e)}
            type="url"
            id="imageUrl"
            placeholder="https://example.com/image.png"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200"
          />
        </div>

        <div>
          <label
            htmlFor="productName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Product Name
          </label>
          <input
            ref={(e) => (inputref.current.productname = e)}
            type="text"
            id="productName"
            placeholder="e.g., Cyberpunk Jacket"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Price ($)
          </label>
          <input
            ref={(e) => (inputref.current.price = e)}
            type="number"
            id="price"
            placeholder="99.99"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Category
          </label>
          <select
            ref={(e) => (inputref.current.category = e)}
            id="category"
            className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200 cursor-pointer"
          >
            <option className="bg-slate-900 text-white">Men</option>
            <option className="bg-slate-900 text-white">Women</option>
            <option className="bg-slate-900 text-white">Kids</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:opacity-95 active:scale-[0.99] transition duration-200"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Userefform;
