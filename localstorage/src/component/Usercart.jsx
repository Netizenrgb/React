import React from "react";

const Usercart = ({ userdata, setToggle, del, setupdateduser }) => {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 shadow-xl backdrop-blur-md hover:border-slate-700/80 hover:shadow-indigo-500/10 transition-all duration-300">
      {/* Top Banner Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* User Image */}
        <div className="relative mb-5 w-full h-48 overflow-hidden rounded-2xl bg-slate-950">
          <img
            src={userdata.image}
            alt={userdata.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* User Info */}
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Member
          </p>
          <h3 className="text-lg font-black text-slate-100 truncate">
            {userdata.name}
          </h3>
          <p className="text-xs font-medium text-slate-400 truncate">
            {userdata.email || "No email provided"}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-3">
        <button
          onClick={() => {
            setupdateduser(userdata);
            setToggle((prev) => !prev);
          }}
          className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors active:scale-95"
        >
          Update
        </button>
        <button
          onClick={() => {
            del(userdata.id);
          }}
          className="flex-1 py-2 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold border border-rose-500/20 transition-colors active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercart;
