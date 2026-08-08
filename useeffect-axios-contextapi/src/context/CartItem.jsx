import { createContext, useState } from "react";

export let MyCartItem = createContext();

export let CartItem = ({ children }) => {
  const [cartitems, setCartitems] = useState([]);

  const incrementproduct = (id) => {
    setCartitems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementproduct = (id) => {
    setCartitems((prev) => {
      return prev
        .map((val) => {
          return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
        })
        .filter((val) => val.quantity > 0);
    });
  };

  const removeproduct = (id) => {
    setCartitems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    alert("Item removed from cart");
  };

  const proceedtocheckout = () => {
    setCartitems([]);
    alert("Order successful \n Shop Again  😁");
  };

  return (
    <MyCartItem.Provider
      value={{
        cartitems,
        setCartitems,
        incrementproduct,
        decrementproduct,
        removeproduct,
        proceedtocheckout,
      }}
    >
      {children}
    </MyCartItem.Provider>
  );
};
