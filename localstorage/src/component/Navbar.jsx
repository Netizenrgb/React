import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl transition-all">
      {/* Brand / Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/30 group-hover:rotate-12 transition-transform duration-300">
          U
        </div>
        <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
          USER<span className="text-indigo-400">HUB</span>
        </span>
      </div>

      {/* Action Button */}
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="relative group overflow-hidden rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:bg-indigo-500 active:scale-95 transition-all duration-200"
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
          Create User
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
