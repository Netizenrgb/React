import React from "react";

const Usercard = ({ user, del }) => {
  return (
    <div className="max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h1 className="text-center text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">
        The user display
      </h1>

      <div className="flex justify-center mb-4">
        <img
          src={user.image}
          alt={user.name}
          className="h-24 w-24 rounded-full object-cover border-2 border-indigo-100 shadow-inner bg-gray-50"
        />
      </div>

      <div className="text-center space-y-1">
        <h4 className="text-lg font-bold text-gray-900">
          Name : <span className="font-medium text-gray-700">{user.name}</span>
        </h4>
        <p className="text-sm text-gray-500">
          Email :{" "}
          <span className="font-medium text-gray-600">{user.email}</span>
        </p>
        <button
          className="bg-red-500 rounded-2xl p-2"
          onClick={() => del(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
