import React, { useState } from "react";
import Register from "./component/Register";
import Usercard from "./component/Usercard";

const App = () => {
  const [user, setUser] = useState([]);
  
  let del = (id) => {
    setUser((prev) => prev.filter((elem) => elem.id !== id));
  };

  return (
    <div>
      <Register user={user} setUser={setUser} />

      {user.map((elem) => {
        return <Usercard user={elem} del={del} />;
      })}
    </div>
  );
};

export default App;
