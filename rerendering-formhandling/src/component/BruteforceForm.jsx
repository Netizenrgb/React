import React, { useState } from "react";

const BruteforceForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <h1>Brute force form method </h1>
      <br />
      <input
        className="border-1"
        type="text"
        placeholder="Username "
        onChange={(e) => {
          // Set user will put let react know that there is a change in the i/p
          setUser(e.target.value);
          // this wil not
          //   console.log(e.target.value);
        }}
      />
      <input
        className="border-1"
        type="email"
        placeholder="Email "
        onChange={(e) => {
          // Set user will put let react know that there is a change in the i/p
          setEmail(e.target.value);
          // this wil not
          //   console.log(e.target.value);
        }}
      />
      <input
        className="border-1"
        type="text"
        placeholder="passowrd "
        onChange={(e) => {
          // Set user will put let react know that there is a change in the i/p
          setPassword(e.target.value);
          // this wil not
          //   console.log(e.target.value);
        }}
      />
      <br />
      <p>UserName : {user}</p>
      <p>Email : {email}</p>
      <p>password : {password}</p>
      <br />
      <button className="bg-amber-500 border rounded-2xl p-1">Submit</button>
      <hr /> <hr />
    </form>
  );
};

export default BruteforceForm;

// in this method the number of usestae will be equal to the i/ps in theform
