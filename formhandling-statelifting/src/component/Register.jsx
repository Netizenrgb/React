import React, { useState } from "react";

const Register = ({ user, setUser }) => {
  const [formdata, setFormdata] = useState({
    image: "",
    name: "",
    email: "",
    password: "",
  });

  let formsubmit = (e) => {
    e.preventDefault();

    const newUser = {
      ...formdata,
      id: Date.now(),
    };

    setUser((prev) => [...prev, newUser]);
  };

  let changeinput = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
        <div>
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            This is Register page
          </h1>
        </div>

        <form className="mt-8 space-y-4" onSubmit={formsubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              onChange={changeinput}
              name="image"
              value={formdata.image}
              type="url"
              placeholder="https://example.com"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              onChange={changeinput}
              name="name"
              value={formdata.name}
              type="text"
              placeholder="John Doe"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              onChange={changeinput}
              name="email"
              value={formdata.email}
              type="email"
              placeholder="you@example.com"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              onChange={changeinput}
              name="password"
              value={formdata.password}
              type="password"
              placeholder="••••••••"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="pt-2">
            <button className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors cursor-pointer">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
