# React Context API - Concepts

# Project Overview

In this project, we are building a simple **Shopping Application**.

The application has two main features:

- Display Products
- Manage Cart

Instead of passing data through multiple components using **Props**, we use **React Context API**.

Context API allows multiple components to access the same data without manually passing props through every intermediate component.

This project mainly teaches:

- Context API
- createContext()
- Provider
- Consumer
- useContext()
- Global State
- Sharing Data Between Components

---

# Before Learning Context API

Before Context API, we used **Props**.

Suppose App has some data.

```jsx
const user = {
  name: "Rahul",
};
```

If Navbar needs this data,

App passes it like this.

```
App

↓

Navbar
```

```jsx
<Navbar user={user} />
```

Navbar receives

```jsx
const Navbar = ({ user }) => {
  return <h1>{user.name}</h1>;
};
```

This is completely fine.

Props are the normal way to share data.

---

# The Problem

Imagine a large application.

```
App

↓

Home

↓

Products

↓

ProductCard

↓

AddToCartButton
```

Only

```
AddToCartButton
```

needs

```
cart
```

But App must pass the cart through

- Home
- Products
- ProductCard

even though they never use it.

```
App

↓

Home

↓

Products

↓

ProductCard

↓

AddToCartButton
```

Every component has to receive

```jsx
cart;
```

only to pass it forward.

This is called

# Prop Drilling

---

# What is Prop Drilling?

Prop Drilling means

Passing the same data through multiple components even though those components don't actually need it.

Example

```
App

↓

Navbar

↓

Sidebar

↓

Product

↓

Button
```

Suppose only

```
Button
```

needs the data.

Still,

App has to pass it to

Navbar

↓

Sidebar

↓

Product

↓

Button

One by one.

Even though

Navbar

Sidebar

Product

never use that data.

They only forward it.

---

# Why is Prop Drilling a Problem?

Imagine your application has

20 components.

Every time you create a new prop,

you must update

```
App

↓

Child

↓

Child

↓

Child

↓

Child

↓

Actual Component
```

This becomes difficult to maintain.

Problems include

- Lots of unnecessary props
- Difficult debugging
- Repeated code
- Harder to understand component relationships

As applications grow,

Prop Drilling becomes messy.

---

# Why was Context API Introduced?

React introduced Context API to solve Prop Drilling.

Instead of manually passing props,

React creates a **shared storage area**.

Any component can directly access this storage.

Without Context API

```
App

↓

Navbar

↓

Sidebar

↓

Product

↓

Button
```

With Context API

```
           Context

        /     |      \

Navbar Product Cart
```

Every component can access the same data.

No intermediate props are needed.

---

# What is Context API?

Context API is React's built-in way of sharing data globally.

Instead of passing props through many components,

we place the data inside Context.

Then,

any component can access it whenever it needs.

Think of Context as a **shared storage box**.

Every component can open the box and read the data.

---

# Real World Analogy

Imagine a school.

Without Context API

```
Principal

↓

Teacher

↓

Class Monitor

↓

Student
```

Suppose the Principal wants to send a message.

Every person has to pass the message to the next person.

This is like Prop Drilling.

Now imagine the school has a Notice Board.

```
Principal

↓

Notice Board

↓

Everyone Reads It
```

Nobody needs to pass the message anymore.

Context API works like that Notice Board.

---

# Context API Mental Model

Think of Context API like this.

```
Data

↓

Context

↓

Provider

↓

React Components

↓

useContext()

↓

Use Data
```

The Provider stores the data.

Any component can access it using

```
useContext()
```

---

# createContext()

Every Context starts here.

```jsx
export const Myshop = createContext();
```

Think of

```jsx
createContext();
```

as creating an empty storage box.

Initially,

the box contains nothing.

```
Myshop

↓

Empty Box
```

Later,

the Provider fills this box with data.

---

# Provider

The Provider is responsible for storing data.

Example

```jsx
<Myshop.Provider value={...}>
```

Provider says

> "Everything inside me can access this data."

Think of Provider as

```
Wi-Fi Router
```

The router provides internet.

Every device connected to it can use the internet.

Similarly,

Provider provides data.

Every component inside it can access the data.

---

# Why do we wrap App with Provider?

In your project,

main.jsx contains

```
<ProductContextProvider>

<MyshopContextprovider>

<App/>

</MyshopContextprovider>

</ProductContextProvider>
```

Provider wraps App because

every component inside App should have access to the Context.

Anything inside Provider

can use

```jsx
useContext();
```

Anything outside Provider

cannot.

---

# Consumer

Earlier,

React used

```jsx
<MyContext.Consumer>
```

to access Context.

Today,

we almost never use Consumer directly.

Instead,

React gives us

```jsx
useContext();
```

which is much simpler.

You can think of

```
useContext()
```

as the modern Consumer.

---

# useContext()

Suppose we have

```jsx
const data = useContext(Myshop);
```

React does this internally.

```
Find Myshop

↓

Find its Provider

↓

Read value

↓

Return Data
```

Now

```
data
```

contains everything stored inside

```
value={}
```

---

# children

Look at this

```jsx
const MyshopContextprovider = ({ children }) => {
```

Many beginners get confused here.

Suppose we write

```jsx
<MyshopContextprovider>
  <App />
</MyshopContextprovider>
```

React automatically passes

```
<App/>
```

inside

```
children
```

So

```
children

↓

<App/>
```

Provider renders

```jsx
{
  children;
}
```

which means

```
<App/>
```

gets displayed.

Without children,

nothing inside Provider would appear.

---

# value

Provider has one special prop.

```jsx
value = {};
```

Example

```jsx
<Myshop.Provider
value={{
toggle,
setToggle,
cartitem,
setCartitem
}}
>
```

The

```
value
```

prop contains all the data we want to share.

Notice

```jsx
value;
```

accepts only one prop.

That's why we pass

an object.

Inside that object,

we can store

- state
- functions
- arrays
- objects

Anything we want.

---

# Why Did We Create Two Contexts?

In this project,

we created

```
ShopContext
```

and

```
ProductContext
```

instead of one huge Context.

Why?

Because both store different kinds of data.

## ShopContext

Stores

- Cart Items
- Toggle State

This data changes frequently.

---

## ProductContext

Stores

- Product List

The product list remains almost constant.

---

Keeping them separate makes the code

- Cleaner
- Easier to understand
- Easier to maintain

Imagine storing everything in one Context.

```
Products

Cart

Users

Theme

Authentication

Settings
```

One Context would become very large.

Creating multiple Contexts is a better practice.

---

# Complete Context Flow

```
createContext()

↓

Context Created

↓

Provider Stores Data

↓

Provider Wraps App

↓

App Renders

↓

Component Calls

useContext()

↓

React Finds Provider

↓

Reads value

↓

Returns Data

↓

Component Uses Data
```

---

# Props vs Context API

| Props                          | Context API                                   |
| ------------------------------ | --------------------------------------------- |
| Pass data from Parent to Child | Share data globally                           |
| Good for small applications    | Better for large applications                 |
| Requires manual passing        | No Prop Drilling                              |
| Easy to understand             | Better for shared state                       |
| Parent controls the flow       | Any child inside Provider can access the data |

---

# Important Concepts Learned

## Props

Used to send data from Parent to Child.

---

## Prop Drilling

Passing the same props through multiple components that don't actually use them.

---

## Context API

A built-in React feature used to share data globally.

---

## createContext()

Creates a new Context object.

---

## Provider

Stores the shared data.

---

## Consumer

The old way of reading Context.

Today we usually use `useContext()` instead.

---

## useContext()

Reads data from the nearest Provider.

---

## children

Represents everything placed inside the Provider.

---

## value

Contains all the shared data.

---

## Global State

Data that many components need can be stored inside Context instead of passing props manually.

---

# Final Takeaway

Context API is React's solution to the problem of **Prop Drilling**.

Instead of manually passing props through every component, we create a **Context**, store shared data inside a **Provider**, and access it anywhere using **useContext()**.

The complete flow is easy to remember:

```
Create Context

↓

Store Data in Provider

↓

Wrap Components

↓

Call useContext()

↓

Access Shared Data
```

In this project, we created **two separate contexts**:

- **ProductContext** for product data.
- **ShopContext** for cart and UI state.

Keeping related data in separate contexts makes the application easier to understand, easier to maintain, and easier to scale as it grows.

# Project Structure

Our project is divided into different files, and every file has a specific responsibility.

```
src
│
├── main.jsx
│
├── App.jsx
│
├── context
│   │
│   ├── Shopcontext.jsx
│   └── Productcontext.jsx
│
└── components
    │
    ├── Navbar.jsx
    ├── Product.jsx
    └── Cart.jsx
```

Instead of putting everything inside one file, React encourages us to divide our application into smaller reusable components.

Each file has only one responsibility.

---

# Understanding main.jsx

Every React application starts from

```jsx
main.jsx;
```

This is called the **Entry Point** of the application.

Think of it as the main door of your application.

Whenever the application starts,

React first enters

```
main.jsx
```

Inside main.jsx

```jsx
createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <MyshopContextprovider>
      <App />
    </MyshopContextprovider>
  </ProductContextProvider>,
);
```

Let's understand it step by step.

---

## Why Provider Wraps App?

Notice

```jsx
<ProductContextProvider>
  <MyshopContextprovider>
    <App />
  </MyshopContextprovider>
</ProductContextProvider>
```

Many beginners ask

Why not simply render

```jsx
<App />
```

Because

App needs access to both Contexts.

The Provider must be placed **above** every component that wants to use Context.

Think of it like Wi-Fi.

```
Router

↓

Phone

Laptop

Tablet
```

The Router must exist first.

Then devices can connect.

Similarly,

```
Provider

↓

App

↓

Navbar

↓

Product

↓

Cart
```

All these components now have access to Context.

---

# Understanding Shopcontext.jsx

This Context stores everything related to the shop.

```jsx
const [cartitem, setCartitem] = useState([]);
```

Initially

```
cartitem=[]
```

The cart is empty.

Whenever the user clicks

```
Add To Cart
```

Products are stored inside this array.

---

Another state is

```jsx
const [toggle, setToggle] = useState(false);
```

Initially

```
toggle=false
```

which means

```
Show Products
```

Later

```
toggle=true
```

means

```
Show Cart
```

---

## Returning Provider

The Provider returns

```jsx
<Myshop.Provider
value={{
toggle,
setToggle,
cartitem,
setCartitem
}}
>
```

Everything inside

```
value
```

becomes globally available.

Any component can access

- toggle
- setToggle
- cartitem
- setCartitem

using

```jsx
useContext();
```

---

# Understanding Productcontext.jsx

This Context stores

```
Products
```

Instead of creating

```jsx
const product = [];
```

inside App,

we created a separate Context.

Why?

Because many components might need product data.

For example

```
Product

Cart

Wishlist

Search

Filters
```

Instead of sending products through props,

we place them inside Context.

Now every component can access them.

---

## Product Provider

The Provider returns

```jsx
<ProductContext.Provider
value={{product}}
>
```

The only thing being shared is

```
product
```

Every component inside the Provider can access it.

---

# Understanding App.jsx

App is the main component of our application.

Instead of creating states here,

App simply reads data from Context.

```jsx
let { toggle, cartitem, setToggle, setCartitem } = useContext(Myshop);
```

React looks inside

```
Myshop Provider
```

and returns

```jsx
{
  (toggle, setToggle, cartitem, setCartitem);
}
```

Similarly

```jsx
const { product } = useContext(ProductContext);
```

returns

```
product
```

from

ProductContext.

---

# Why useContext() is Used in App?

Imagine Context as a storage room.

```
Storage Room

↓

Products

Cart

Toggle
```

App needs

- Products
- Toggle
- Cart

Instead of passing them as Props,

App directly asks Context.

```jsx
useContext();
```

React automatically gives App the data.

No Props are required.

---

# Conditional Rendering

Inside App

```jsx
{
  toggle ? <Cart /> : <Product List />;
}
```

This means

If

```
toggle=true
```

React shows

```
Cart
```

Otherwise

React shows

```
Products
```

This is called

## Conditional Rendering

---

# Rendering Products

App contains

```jsx
product.map((elem) => {
  return <Product />;
});
```

Suppose

```
product
```

contains

20 objects.

React creates

```
<Product/>

<Product/>

<Product/>

...

20 Times
```

One Product Component

for every object.

---

# Product Flow

Let's understand the complete flow.

```
Application Starts

↓

ProductContext

↓

Products Stored

↓

App

↓

useContext()

↓

Product Array Received

↓

map()

↓

Product Component

↓

Products Displayed
```

This is how every product appears on the screen.

---

# Cart Flow

When the user clicks

```
Add To Cart
```

the Product component calls

```jsx
setCartitem();
```

The new product is added into

```
cartitem
```

which is stored inside

```
ShopContext
```

Flow

```
Product

↓

Add To Cart

↓

setCartitem()

↓

cartitem Updates

↓

Context Updates

↓

Cart Component Reads Context

↓

Cart Displays Items
```

Notice

Product and Cart never communicate directly.

Context is the middleman.

---

# Toggle Flow

Navbar contains

```
Cart Button
```

When clicked

Navbar calls

```jsx
setToggle();
```

The flow becomes

```
Navbar

↓

setToggle()

↓

toggle Changes

↓

Context Updates

↓

App Reads Toggle

↓

Products Hidden

↓

Cart Displayed
```

When clicked again

```
Navbar

↓

setToggle()

↓

toggle=false

↓

Products Display Again
```

---

# Why Separate Contexts?

We created

```
ShopContext
```

and

```
ProductContext
```

instead of one huge Context.

Reason

Products

↓

Rarely Change

Cart

↓

Changes Frequently

Keeping them separate makes

- Better organization
- Easier debugging
- Easier maintenance
- Better scalability

---

# Complete Project Flow

```
Application Starts

↓

main.jsx

↓

ProductContext Created

↓

ShopContext Created

↓

Providers Wrap App

↓

App Renders

↓

App Reads Context

↓

Products Received

↓

Products Displayed

↓

User Clicks Add To Cart

↓

Cart Updates

↓

ShopContext Updates

↓

Cart Reads Context

↓

Cart Displays Items

↓

User Clicks Cart Button

↓

toggle Changes

↓

Products Hidden

↓

Cart Displayed
```

---

# Important Concepts Learned

## Provider Nesting

Multiple Providers can wrap the same application.

---

## Global State

Data shared by multiple components.

---

## useContext()

Reads data directly from Context.

---

## Conditional Rendering

Display different components depending on state.

---

## map()

Used to display multiple Product components.

---

## Context Separation

Different Contexts should store different types of data.

---

## Data Flow

ProductContext

↓

Products

↓

App

↓

Product Components

---

ShopContext

↓

Cart

↓

Navbar

↓

Cart Component

---

# Final Takeaway

This project demonstrates how **React Context API** can replace excessive prop passing by providing a shared global state.

Instead of sending data through multiple components, we created two dedicated contexts:

- **ProductContext** stores all product-related data.
- **ShopContext** stores all shop-related data, such as cart items and the toggle state.

The overall flow of the application is simple:

```
Context Created

↓

Provider Stores Data

↓

Provider Wraps App

↓

App Reads Data using useContext()

↓

Components Display Data

↓

User Interacts

↓

Context Updates

↓

React Re-renders

↓

Updated UI Appears
```

By separating the application into multiple contexts, the code becomes cleaner, easier to maintain, and easier to scale.

This project also introduces one of the most important React patterns: **Global State Management**. Understanding Context API will make it much easier to learn advanced state management libraries like **Redux**, **Zustand**, or **Recoil** in the future because they all build upon the same idea of sharing state across multiple components.
