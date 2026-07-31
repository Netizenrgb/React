import React, { useState } from "react";

const Controlledfrom2 = () => {
  const [formdata, setformdata] = useState({});

  function submit(e) {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }

  // Prevents the browser from refreshing when you click Submit
  function handleReload(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleReload}>
      <h1>Controlled form eg 2</h1>
      {/* 1. Added onChange handler to connect to your submit function */}
      <input
        name="username"
        className="border-1"
        type="text"
        placeholder="usename"
        onChange={submit}
      />
      {/* 2. Added onChange handler */}
      <input
        name="email"
        className="border-1"
        type="text"
        placeholder="Email"
        onChange={submit}
      />
      {/* 3. Added onChange handler */}
      <input
        name="password"
        className="border-1"
        type="text"
        placeholder="password"
        onChange={submit}
      />
      {/* 4. Changed formdata.name to formdata.username to match the input name */}
      <p>Name : {formdata.username}</p>
      <p>Email : {formdata.email}</p>
      <p>Password : {formdata.password}</p>
      <button type="submit" className="bg-amber-500 border rounded-2xl p-1">
        Submit
      </button>
      <hr /> <hr />
    </form>
  );
};

export default Controlledfrom2;
