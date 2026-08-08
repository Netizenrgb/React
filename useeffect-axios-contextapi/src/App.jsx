import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Products from "./components/Products";
import { MyNavigation } from "./context/CartNavigation";
import Cart from "./components/Cart";
import { MyCartItem } from "./context/CartItem";

const App = () => {
  const [productdata, setProductdata] = useState([]);

  let { cartitems } = useContext(MyCartItem);

  let getdata = async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    setProductdata(response.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  let { iscartopen, setIscartopen } = useContext(MyNavigation);

  return (
    <div>
      <Navbar />

      {iscartopen ? (
        <div>
          <Cart />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5 ">
          {productdata.map((elem) => {
            let isincart = cartitems.find((val) => val.id === elem.id);

            return <Products prd={elem} key={elem.id} isincart={isincart} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
