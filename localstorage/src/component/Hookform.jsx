import React from "react";
import { useForm } from "react-hook-form";

const Hookform = ({
  userdata,
  setUserdata,
  setToggle,
  updateduser,
  setupdateduser,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: updateduser });

  let submit = (data) => {
    if (updateduser) {
      setUserdata((prev) => {
        return prev.map((user) => {
          return user.id === updateduser.id
            ? { ...data, id: updateduser.id }
            : user;
        });
      });
    } else {
      const userobj = {
        id: Date.now(),
        name: data.name,
        email: data.email,
        image: data.image,
      };

      const updatedUsers = [...userdata, userobj];
      setUserdata(updatedUsers);
      localStorage.setItem("user", JSON.stringify(updatedUsers));
    }

    reset();
    setToggle(false);
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-6">
        <h2 className="text-2xl font-black text-white tracking-tight">
          {updateduser ? "Edit User Profile" : "Create New Profile"}
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Fill out the fields below to{" "}
          {updateduser ? "update the" : "add a new"} user to your system.
        </p>
      </div>

      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
        {/* Name Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Full Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^\S.*$/,
                message: "Blank spaces not allowed",
              },
            })}
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
          />
          {errors.name && (
            <p className="text-xs font-medium text-rose-400 mt-1.5 flex items-center gap-1">
              <span>⚠</span> {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email",
              },
            })}
            type="text"
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
          />
          {errors.email && (
            <p className="text-xs font-medium text-rose-400 mt-1.5 flex items-center gap-1">
              <span>⚠</span> {errors.email.message}
            </p>
          )}
        </div>

        {/* Avatar URL Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Avatar Image URL
          </label>
          <input
            {...register("image", { required: "Image URL is required" })}
            type="url"
            placeholder="https://images.unsplash.com/..."
            className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
          />
          {errors.image && (
            <p className="text-xs font-medium text-rose-400 mt-1.5 flex items-center gap-1">
              <span>⚠</span> {errors.image.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition-all"
        >
          {updateduser ? "Save Changes" : "Submit Member"}
        </button>
      </form>
    </div>
  );
};

export default Hookform;
