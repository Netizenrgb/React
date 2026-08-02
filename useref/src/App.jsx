import React, { useState } from "react";
import Userefform from "./component/Userefform";
import ProductCart from "./component/ProductCart";

const App = () => {
  const [displayproduct, setDisplayproduct] = useState([]);

  return (
    <div>
      <Userefform
        displayproduct={displayproduct}
        setDisplayproduct={setDisplayproduct}
      />

      {displayproduct.map((elem) => {
        return <ProductCart displayproduct={elem} />;
      })}
    </div>
  );
};

export default App;
