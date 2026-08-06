import { createContext, useState } from "react";

// Store
export let Myshop = createContext();

// provider
export const MyshopContextprovider = ({ children }) => {
  const [cartitem, setCartitem] = useState([]);
  const [toggle, setToggle] = useState(false);

  // 1. return the shop i.e the var which created the context (in this case Myshop)
  //   2. the value only accepts one prop so pass an obj
  return (
    <Myshop.Provider value={{ toggle, setToggle,cartitem, setCartitem }}>
      {children}
    </Myshop.Provider>
  );
};
