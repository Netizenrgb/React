# React Shopping Cart — useEffect & Axios

## Project Overview

A small shopping application built to practice two core React concepts:

1. **`useEffect`** — deciding *when* a side effect should run
2. **Axios** — actually making the HTTP request

Context API is also used to share cart and navigation state across components, but it's supporting cast — the main focus is understanding how `useEffect` and Axios work together to fetch and display data.

**Features:**
- Fetch products from an API
- Display products
- Add products to the cart
- Increase / decrease product quantity
- Remove products from the cart
- Calculate the total price
- Open and close the cart
- Clear the cart after checkout

---

## Project Structure

```text
src
│
├── main.jsx
├── App.jsx
│
├── components
│   ├── Navbar.jsx
│   ├── Products.jsx
│   └── Cart.jsx
│
└── context
    ├── CartNavigation.jsx
    └── CartItem.jsx
```

| File | Responsibility |
|---|---|
| `main.jsx` | Boots the app, wraps it in Context Providers |
| `App.jsx` | Fetches products, stores them, displays them, switches between Products/Cart views |
| `Products.jsx` | Renders a single product, handles add/increase/decrease |
| `Cart.jsx` | Renders cart items, handles increase/decrease/remove, calculates total, checkout |
| `Navbar.jsx` | Navigation — opens the cart, returns to products |
| `context/CartItem.jsx` | Stores and manages cart data |
| `context/CartNavigation.jsx` | Stores whether the cart is currently open |

---

## Axios and the API

**Axios** is a JavaScript library for making HTTP requests — it's how the React app talks to a server. It is not part of React; React manages the UI, Axios manages communication.

```text
React Application → Axios → API → Product Data
```

The **API** used here is `https://fakestoreapi.com/products`, which returns product objects like:

```json
{
  "id": 1,
  "title": "Backpack",
  "price": 109.95,
  "description": "...",
  "category": "men's clothing",
  "image": "..."
}
```

Axios exposes methods for each HTTP verb (`get`, `post`, `put`, `delete`), but this project only needs `axios.get()` — we're just retrieving data.

### Making the request

In `App.jsx`:

```jsx
let getdata = async () => {
  let response = await axios.get("https://fakestoreapi.com/products");
  setProductdata(response.data);
};
```

- `axios.get(url)` sends a GET request ("give me some data") to the API.
- `response` is the full response object from the server.
- `response.data` is the actual array of products we care about.

### Why `async` / `await`

An API request isn't instant — it has to travel to the server, get processed, and travel back. JavaScript shouldn't freeze while waiting, so requests are asynchronous.

- `async` marks the function as one that can pause and resume.
- `await` pauses *that function* until the request settles — it does **not** freeze the browser or block anything else.

---

## useEffect

`useEffect` lets you run code *after* React renders a component. It's the standard tool for side effects: API requests, timers, event listeners, subscriptions, and other things that reach outside the render itself.

```jsx
useEffect(() => {
  getdata();
}, []);
```

**Mental model:** *"After React has rendered, perform this side effect."*

```text
Component Mounts → useEffect Runs → getdata() → Axios Request →
Products Received → setProductdata() → Component Re-renders
```

### Why not just call `getdata()` directly in the component body?

Because the component function re-runs on every render:

```jsx
// Don't do this
const App = () => {
  getdata();      // runs on every render
  return ...
}
```

If `getdata()` calls `setProductdata()`, that triggers a re-render, which calls `getdata()` again, which triggers another re-render — an infinite loop of repeated API requests. `useEffect` breaks that cycle by running only when its dependency array says to.

### The dependency array

```jsx
useEffect(() => {
  getdata();
}, []);   // ← empty dependency array
```

An empty array means: *run once, after the initial render, and don't re-run due to state or prop changes.* That's exactly what we want — fetch the product list once per mount.

### What counts as a "side effect"?

Anything that interacts with something outside the normal render process: API requests, timers, `localStorage`, direct DOM manipulation, event listeners. Rendering (`return <h1>Hello</h1>`) just describes UI; `axios.get(...)` reaches out to an external system — that's the side effect `useEffect` exists to manage.

> **Important distinction:** `useEffect` doesn't fetch anything itself — it only decides *when* `getdata()` runs. Axios is what actually performs the request.
>
> ```text
> useEffect → WHEN should this side effect happen?
> Axios     → HOW do I make the API request?
> ```

---

## Storing and Displaying Products

```jsx
const [productdata, setProductdata] = useState([]);
```

`productdata` starts empty. Once Axios resolves, `setProductdata(response.data)` updates state — and a state change is what triggers React to re-render:

```text
State Changes → React Re-renders → New State Used → UI Updates
```

On that re-render, `productdata.map()` now has real products to work with:

```jsx
productdata.map((elem) => {
  let isincart = cartitems.find((val) => val.id === elem.id);
  return <Products prd={elem} key={elem.id} isincart={isincart} />;
});
```

- **`map()`** turns the product array into one `<Products />` component per item.
- **`key={elem.id}`** gives React a stable identifier for each list item, so it can track which item is which when the list changes.
- **`cartitems.find(...)`** checks whether this product is already in the cart, returning the matching object or `undefined`.

`isincart` then drives conditional rendering in `Products.jsx`:

```jsx
{isincart ? (
  quantityControls
) : (
  addToCartButton
)}
```

---

## Cart Logic

### Adding a product

```jsx
let addtocart = () => {
  setCartitems((prev) => [
    ...prev,
    { ...prd, quantity: 1 },
  ]);
};
```

The API doesn't know about cart quantity — that's app-specific state, so we spread the product (`...prd`) and attach `quantity: 1` when it enters the cart.

### Incrementing quantity

```jsx
const incrementproduct = (id) => {
  setCartitems((prev) =>
    prev.map((val) =>
      val.id === id ? { ...val, quantity: val.quantity + 1 } : val
    )
  );
};
```

`map()` is used because we want a **new array** where only the matching product changes — everything else passes through unchanged.

### Decrementing quantity

```jsx
const decrementproduct = (id) => {
  setCartitems((prev) =>
    prev
      .map((val) =>
        val.id === id ? { ...val, quantity: val.quantity - 1 } : val
      )
      .filter((val) => val.quantity > 0)
  );
};
```

Two steps: `map()` decreases the quantity, then `filter()` drops any item whose quantity hit zero — which is why the "Add to Cart" button reappears once a product's quantity reaches 0 (it no longer exists in `cartitems`).

### Removing a product

```jsx
const removeproduct = (id) => {
  setCartitems((prev) => prev.filter((item) => item.id !== id));
};
```

`filter()` returns a new array excluding the matching item entirely.

### Calculating the total

```jsx
const total = cartitems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
```

`reduce()` collapses the whole array into a single number — summing `price × quantity` for every item.

`total.toFixed(2)` then formats it to two decimal places (`20` → `"20.00"`, `19.5` → `"19.50"`).

### Checkout

```jsx
const proceedtocheckout = () => {
  setCartitems([]);
  alert("Order successful");
};
```

Emptying `cartitems` triggers a re-render; since `cartitems.length === 0`, the UI shows the empty-cart message.

---

## Navigation Between Products and Cart

```jsx
const [iscartopen, setIscartopen] = useState(false);
```

- `iscartopen === false` → show `<Products />`
- `iscartopen === true` → show `<Cart />`

| Action | Effect |
|---|---|
| Click "Cart" in Navbar | `setIscartopen(true)` |
| Click "Home" in Navbar | `setIscartopen(false)` |
| Click "Continue Shopping" in Cart | `setIscartopen(false)` |

---

## Full Data Flow (start to finish)

```text
App Renders (productdata = [])
        ↓
useEffect Runs (mount only)
        ↓
getdata() → axios.get() → API Request
        ↓
Server Returns Products → response.data
        ↓
setProductdata(response.data)
        ↓
App Re-renders → productdata.map() → Products Display
        ↓
User clicks "Add to Cart" → cartitems updates
        ↓
Cart re-renders: +, -, Remove, Total
        ↓
Checkout → cartitems = [] → "Order successful"
```

---

## Key Concepts Reference

| Concept | Role |
|---|---|
| **Axios** | Communicates with the API (`axios.get(url)`) |
| **API** | Server endpoint providing data — here, `fakestoreapi.com/products` |
| **async/await** | Handles asynchronous operations without blocking the app |
| **useEffect** | Runs a side effect after render; empty `[]` = once per mount |
| **useState** | Stores `productdata`, `cartitems`, `iscartopen` |
| **map()** | Transforms every item in an array (render list, update one item) |
| **find()** | Searches for a single matching item (is this product in the cart?) |
| **filter()** | Builds a new array excluding certain items (remove, zero-quantity cleanup) |
| **reduce()** | Collapses an array into one value (cart total) |

---

## Common Beginner Mistakes

**Calling the API during render, not inside `useEffect`:**
```jsx
// Avoid — can cause repeated requests
const App = () => {
  getdata();
  return ...
}
```

**Omitting the dependency array:**
```jsx
useEffect(() => {
  getdata();
}); // runs after every render — since getdata() triggers a state
    // update, this can spiral into repeated API calls
```

**Treating Axios as part of React:** it isn't — React renders UI, Axios handles HTTP. They're independent libraries that happen to work well together.

**Assuming `useEffect` itself fetches data:** it only schedules *when* `getdata()` runs; Axios is what performs the actual request.

---

## Final Takeaway

```text
useEffect  → controls WHEN the side effect happens
Axios      → handles the HTTP REQUEST
useState   → stores the RESPONSE
React      → re-renders and DISPLAYS the data
```

Once this chain clicks, you're no longer just memorizing `useEffect`/Axios syntax — you understand how an external API becomes React state, and how that state becomes UI.

---

## Practice Challenge

Extend this project to handle API failure gracefully:

```text
API Request
     ↓
Success? ── Yes → Display Products
     │
     No
     ↓
Display "Failed to load products"
```

Think through:
- Where the error state should live
- Where `try/catch` belongs in `getdata()`
- How the UI should look while the request is still loading
- What the UI should show if the request fails

Aim for three explicit states: **Loading → Success (Products) → Error (Message)**. Building this out will cement the `useEffect` + Axios relationship far better than just reading about it.
