# React useRef - Product Registration Project

# Project Overview

This project is a simple **Product Registration Application**.

The application allows the user to

- Enter product details
- Submit the form
- Store every product inside an array
- Display every product as a card

Unlike the previous project, this project **does not use a controlled form**.

Instead, it uses **useRef()**.

This project teaches one of React's most useful hooks.

---

# What is useRef()?

Before understanding useRef(),

let's understand a problem.

Imagine you have an input.

```jsx
<input />
```

The user types

```
Nike Shoes
```

Where is this value stored?

The answer is

```
Inside the Browser
```

NOT inside React.

The browser always stores whatever the user types.

React only knows about it if we tell React.

---

## In Controlled Forms

Earlier we learned

```jsx
const [formdata, setFormdata] = useState({})
```

Every key press did this

```
User Types

↓

onChange

↓

setState()

↓

React Re-renders

↓

UI Updates
```

React always knew the current value.

---

## But What if...

We don't care about every key press?

Suppose we only need the value

when the user clicks Submit.

Why update React after every letter?

That would be unnecessary work.

This is exactly why

```
useRef()
```

exists.

---

# Mental Model

Think of useRef as

a sticky note.

React gives you a small box.

```
useRef()

↓

current

↓

Anything
```

You can store

- DOM Elements
- Variables
- Previous Values
- Timers
- IDs

inside it.

Changing a ref

**does NOT**

cause React to re-render.

That is the biggest difference between

useState

and

useRef.

---

# useState vs useRef

| useState | useRef |
|----------|---------|
| Stores State | Stores Reference |
| Causes Re-render | Does NOT Re-render |
| Updates UI | Does not automatically update UI |
| Used for UI Data | Used for DOM or persistent values |

Remember this sentence.

> If changing the value should update the screen, use **useState**.

> If changing the value should NOT update the screen, use **useRef**.

---

# Understanding App.jsx

The App component stores

```jsx
const [displayproduct, setDisplayproduct] = useState([]);
```

Initially

```jsx
displayproduct=[]
```

The array is empty.

Every submitted product will be stored inside this array.

App passes

```jsx
displayproduct
```

and

```jsx
setDisplayproduct
```

to

```
UseRefform
```

This is called

## Passing Props

---

# Understanding useRef()

Inside

UseRefform

we create

```jsx
const inputref = useRef({});
```

Initially

```
inputref

↓

{
    current:{}
}
```

Notice

React creates an object.

Inside that object,

everything is stored inside

```
current
```

Whenever you use

```jsx
useRef()
```

always remember

```
.current
```

because the actual value is stored there.

---

# Why current?

React keeps the same object alive

between every render.

Only

```
current
```

changes.

Think of it like

```
inputref

↓

current

↓

Actual Value
```

---

# Connecting Inputs

Look at this

```jsx
ref={(e)=>(
    inputref.current.image=e
)}
```

Many beginners think

```
e
```

is the event.

It is NOT.

Here

```
e
```

is the actual HTML Input Element.

Example

```
<input />
```

React gives that DOM element

to the callback.

We store it

inside

```jsx
inputref.current.image
```

Now

```
inputref.current.image

↓

<input />
```

We now have direct access to that input.

---

# Every Input Gets Stored

Image

```jsx
inputref.current.image
```

Product Name

```jsx
inputref.current.productname
```

Price

```jsx
inputref.current.price
```

Category

```jsx
inputref.current.category
```

Instead of storing values,

we are storing references

to HTML elements.

---

# Reading Input Values

When Submit is clicked

we write

```jsx
inputref.current.image.value
```

Let's understand this.

```
inputref

↓

current

↓

image

↓

<input />

↓

.value

↓

Actual Text Typed
```

Suppose

the user typed

```
Nike Shoes
```

Then

```jsx
inputref.current.productname.value
```

returns

```
Nike Shoes
```

Notice

React never stored it.

The browser stored it.

React simply asked

the browser

for the current value.

---

# handleSubmit()

The first line is

```jsx
e.preventDefault()
```

Forms refresh the page by default.

React applications usually don't want that.

So

```jsx
preventDefault()
```

stops the refresh.

---

Next

we create

```jsx
let prd={
    image:...
    productname:...
    price:...
    category:...
}
```

This creates one product object.

Example

```jsx
{
    image:"shoe.png",
    productname:"Nike Shoes",
    price:"2500",
    category:"Men"
}
```

---

# Adding Product

Next

```jsx
setDisplayproduct(prev=>[
    ...prev,
    prd
]);
```

Suppose

Initially

```jsx
[]
```

First Product

```
Nike Shoes
```

Array becomes

```jsx
[
    Nike Shoes
]
```

Second Product

```
Adidas
```

Now

```jsx
[
    Nike Shoes,
    Adidas
]
```

Nothing is overwritten.

React creates

a new array.

---

# Why Functional Updates?

Instead of

```jsx
setDisplayproduct([
...
])
```

we use

```jsx
setDisplayproduct(prev=>...)
```

because

the next state depends

on the previous state.

React recommends this approach.

It avoids bugs caused by stale state.

---

# Understanding ProductCart

App contains

```jsx
displayproduct.map((elem)=>{
    return <ProductCart displayproduct={elem}/>
})
```

map()

loops through every product.

Suppose

```jsx
[
 Shoe,
 Shirt,
 Watch
]
```

React creates

```
<ProductCart />

<ProductCart />

<ProductCart />
```

One card

for every object.

---

# Displaying Product Data

Inside ProductCart

```jsx
displayproduct.image
```

shows

the product image.

```jsx
displayproduct.productname
```

shows

the product name.

```jsx
displayproduct.price
```

shows

the price.

```jsx
displayproduct.category
```

shows

the category.

Each card receives

one object

through props.

---

# Why Doesn't useRef Re-render?

Imagine

the user types

```
A

B

C

D
```

Controlled Form

```
A

↓

setState()

↓

Render

B

↓

setState()

↓

Render

C

↓

Render

D

↓

Render
```

Four renders.

---

useRef

```
A

↓

Browser stores

B

↓

Browser stores

C

↓

Browser stores

D

↓

Browser stores
```

React does nothing.

Only when Submit is clicked

React asks

```
What is inside the input?
```

The browser returns

the value.

This makes useRef faster

for some situations.

---

# When Should You Use useRef?

useRef is useful when

- Accessing input fields
- Focusing an input
- Reading form values without re-rendering
- Storing timers
- Storing interval IDs
- Storing previous values
- Working with DOM elements
- Integrating third-party JavaScript libraries

---

# When Should You NOT Use useRef?

Suppose

you want

```
Live Search
```

As the user types,

the UI should update.

useRef is NOT suitable.

Why?

Because

changing a ref

does not re-render.

Instead

use

```
useState()
```

Whenever the UI must change,

state is the correct choice.

---

# Difference Between Controlled Form and useRef

| Controlled Form | useRef Form |
|-----------------|-------------|
| React stores input values | Browser stores input values |
| Uses useState | Uses useRef |
| Re-renders every key press | No re-render while typing |
| Great for validation | Great for simple forms |
| React always knows current value | React reads value only when needed |

---

# Important Concepts Learned

## useRef()

Creates a reference object.

---

## current

The actual value is stored inside

```
.current
```

---

## ref Attribute

Connects a DOM element

to the ref object.

---

## DOM Reference

Instead of storing values,

useRef stores references

to HTML elements.

---

## Functional Updates

Always use

```jsx
setState(prev=>...)
```

when the next state depends

on the previous state.

---

## map()

Converts an array

into multiple React components.

---

## Props

Allows Parent Components

to send data

to Child Components.

---

# Complete Project Flow

```
User Opens Form

↓

Types Product Details

↓

Browser Stores Input Values

↓

useRef Points To Inputs

↓

Submit Click

↓

handleSubmit()

↓

React Reads

inputref.current.value

↓

Product Object Created

↓

setDisplayproduct()

↓

Products Array Updates

↓

App Re-renders

↓

map()

↓

Product Cards Displayed
```

---

# Final Takeaway

This project teaches one of the biggest differences between **useState** and **useRef**.

- **useState** is used when changing data should update the UI.
- **useRef** is used when you simply need access to a value or a DOM element without causing a re-render.

A simple way to remember it is:

> **If the screen should change, use `useState`. If you just need to remember or access something, use `useRef`.**

Once you understand this project, you'll be ready to learn more advanced uses of `useRef`, such as focusing input fields, storing previous state values, managing timers, and integrating external JavaScript libraries.