import React from "react";

const Usercart = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:border-slate-700/80 transition-all duration-300 group">
      {/* Header Title */}
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 px-1 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        User Profile
      </p>

      {/* Image Container with Hover Effect */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
        <img
          src={user?.image}
          alt={user?.name || "User Avatar"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info Section */}
      <div className="mt-4 px-1">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium text-emerald-400/90 uppercase tracking-wide">
            Name
          </span>
          <p className="text-lg font-semibold text-slate-100 truncate">
            {user?.name || "Anonymous User"}
          </p>

          <p>Email : {user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Usercart;
