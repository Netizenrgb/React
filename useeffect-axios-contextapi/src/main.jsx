import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartNavigate } from "./context/CartNavigation.jsx";
import { CartItem } from "./context/CartItem.jsx";

createRoot(document.getElementById("root")).render(
  <CartItem>
    <CartNavigate>
      <App />
    </CartNavigate>
  </CartItem>,
);
