import React, { useContext } from "react";
import { MyNavigation } from "../context/CartNavigation";

const Navbar = () => {
  let { iscartopen, setIscartopen } = useContext(MyNavigation);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#070B18]/90 border-b border-[#46C76A]/20 shadow-lg shadow-black/30">
      <div className="max-w-[1500px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="p-1 rounded-2xl border border-[#46C76A]/30 bg-[#111827]"></div>

          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              COLOR<span className="text-[#0B7DFF]">SHOP</span>
            </h1>

            <p className="text-xs text-slate-400">Premium Collection</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIscartopen(false)}
            className="px-5 py-2 rounded-full text-slate-300 hover:bg-[#0B7DFF] hover:text-white transition-all duration-300"
          >
            Home
          </button>

          <button
            onClick={() => setIscartopen(true)}
            className="px-5 py-2 rounded-full text-slate-300 hover:bg-[#46C76A] hover:text-black transition-all duration-300"
          >
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
