import React, { useState } from "react";

const Controlledform = () => {
  const [formdata, setformdata] = useState({});
  return (
    <form>
      <h1>Controlled form eg 1</h1>
      <input
        className="border-1"
        type="text"
        placeholder="usename"
        onChange={(e) => {
          // here name is the key of the obj and the value will be the users i/p
          setformdata({ ...formdata, name: e.target.value });
        }}
      />
      <input
        className="border-1"
        type="text"
        placeholder="Email"
        onChange={(e) => {
          // here name is the key of the obj and the value will be the users i/p
          setformdata({ ...formdata, email: e.target.value });
        }}
      />
      <input
        className="border-1"
        type="text"
        placeholder="password"
        onChange={(e) => {
          // here name is the key of the obj and the value will be the users i/p
          setformdata({ ...formdata, password: e.target.value });
        }}
      />
      <p>Name : {formdata.name}</p>
      <p>Email : {formdata.email}</p>
      <p>Password : {formdata.password}</p>
      <button className="bg-amber-500 border rounded-2xl p-1">Submit</button>
      <hr /> <hr />
    </form>
  );
};

export default Controlledform;
