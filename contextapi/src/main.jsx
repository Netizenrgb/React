import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { MyshopContextprovider } from "./context/Shopcontext";
import { ProductContextProvider } from "./context/Productcontext";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <MyshopContextprovider>
      <App />
    </MyshopContextprovider>
  </ProductContextProvider>,
);
