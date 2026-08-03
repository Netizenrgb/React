import React from "react";
import { useForm } from "react-hook-form";

const Reacthookform = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // use mode:"onChange" to tract live changes
  } = useForm();

  const submit = (data) => {
    let userobj = {
      name: data.name,
      email: data.email,
      number: data.number,
      image: data.image,
    };
    setUser((prev) => [...prev, userobj]);
    console.log("->", userobj);

    // reset();
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^\S.*$/,
                  message: "Blank spaces not allowed",
                },
              })}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 rounded-xl outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
            />
            {errors.name && (
              <p className="text-xs font-medium text-rose-400 px-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 rounded-xl outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
            />
            {errors.email && (
              <p className="text-xs font-medium text-rose-400 px-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              {...register("number", {
                required: "Contact is required",
                minLength: {
                  value: 10,
                  message: "Minimum of 10 digits are required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum of 10 digits are required",
                },
              })}
              type="number"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 rounded-xl outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
            />
            {errors.number && (
              <p className="text-xs font-medium text-rose-400 px-1">
                {errors.number.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              {...register("image", { required: "Image URL is required" })}
              type="url"
              placeholder="Image URL"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 rounded-xl outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
            />
            {errors.image && (
              <p className="text-xs font-medium text-rose-400 px-1">
                {errors.image.message}
              </p>
            )}
          </div>

          <button className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-900 font-semibold rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-[0.98] transition-all duration-200">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reacthookform;
