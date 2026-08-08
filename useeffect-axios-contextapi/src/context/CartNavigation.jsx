import { createContext, useState } from "react";

export let MyNavigation = createContext();

export let CartNavigate = ({ children }) => {
  const [iscartopen, setIscartopen] = useState(false);

  return (
    <MyNavigation.Provider value={{ iscartopen, setIscartopen }}>
      {children}
    </MyNavigation.Provider>
  );
};
