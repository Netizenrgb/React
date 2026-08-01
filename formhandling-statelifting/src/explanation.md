## Project Overview

This project is a simple **User Registration Application (Practice project)**.

The application allows the user to

- Fill a registration form
- Submit the form
- Store every registered user inside an array
- Display all users as cards
- Delete any user

Instead of storing only one user, stores **multiple users**.

---

# How the Project Works

The complete flow is

```

User fills the form

↓

React stores the input values inside formdata

↓

User clicks Register

↓

A new user object is created

↓

The new object is added to the users array

↓

React re-renders

↓

User cards appear on the screen

↓

Click Delete

↓

User is removed from the array

↓

React re-renders again

```

Everything in React starts with **State**.

Whenever the state changes,

React automatically updates the UI.

---

# Project Structure

```

App.jsx
│
├── Register.jsx
│
└── Usercard.jsx

```

Each component has its own responsibility.

### App.jsx

Responsible for

- Storing all users
- Rendering Register component
- Rendering User Cards
- Deleting users

---

### Register.jsx

Responsible for

- Collecting user input
- Creating a new user object
- Sending that object to App.jsx

---

### Usercard.jsx

Responsible for

- Displaying user information
- Deleting a user

---

# Understanding App.jsx

The very first thing we create is

```jsx
const [user, setUser] = useState([]);
```

Initially

```jsx
user = [];
```

The array is empty.

There are no registered users.

---

## Why are we using an Array?

Because we want to store **multiple users**.

Imagine three users register.

The array becomes

```jsx
[
  {
    id: 1,
    name: "Rahul"
  },
  {
    id: 2,
    name: "John"
  },
  {
    id: 3,
    name: "David"
  }
]
```

Every user is stored as an object.

The array stores many objects.

---

# Passing Props

App sends

```jsx
<Register
    user={user}
    setUser={setUser}
/>
```

This means

App is sharing

- user
- setUser

with Register.

This is called **Passing Props**.

Props are simply data sent from Parent to Child.

```

Parent

↓

Child

```

---

# What is Lifting State Up?

# Notice something.

The form is inside Register.jsx.

The cards are inside Usercard.jsx.

So where should we store the users?

Inside Register?

No.

Inside Usercard?

No.

We store the users in their **Common Parent**.

That common parent is

```
App.jsx
```

This concept is called

# Lifting State Up

It means

Instead of storing the state inside a child component,

move it to the nearest common parent.

Then share it with children using props.

# ```

        App
       /   \
      /     \
Register   Usercard

# ```

Both children can now access the same data.

----------------------------------------------

# Understanding Register.jsx

The form uses

```jsx
const [formdata, setFormdata] = useState({
    image:"",
    name:"",
    email:"",
    password:""
});
```

Instead of creating four different states,

everything is stored inside one object.

Initially

```jsx
formdata = {
    image:"",
    name:"",
    email:"",
    password:""
}
```

---

# Controlled Form

Every input has

```jsx
value={formdata.name}
```

and

```jsx
onChange={changeinput}
```

This means

React controls every input.

The browser is **not** storing the values.

React State is storing them.

This is called a

## Controlled Component

---

# Understanding changeinput()

```jsx
let changeinput = (e)=>{
    let {name,value}=e.target;

    setFormdata({
        ...formdata,
        [name]:value
    });
}
```

This function works for every input.

Let's understand it.

Suppose

```jsx
<input
name="email"
/>
```

User types

```
abc@gmail.com
```

Then

```jsx
name

↓

email
```

and

```jsx
value

↓

abc@gmail.com
```

React creates

```jsx
{
    email:"abc@gmail.com"
}
```

The spread operator

```jsx
...formdata
```

keeps the previous values.

Without it,

the previous fields would disappear.

---

# Understanding formsubmit()

When Register is clicked,

this function runs.

```jsx
e.preventDefault();
```

Normally,

forms refresh the page.

React applications usually don't want that.

So

```jsx
preventDefault()
```

stops the page refresh.

---

Then

```jsx
const newUser={
    ...formdata,
    id:Date.now()
}
```

creates a brand-new object.

Example

```jsx
{
    image:"image.jpg",
    name:"Rahul",
    email:"abc@gmail.com",
    password:"123",
    id:1754112562
}
```

---

# Why are we adding an id?

Imagine

two users have the same name.

```
Rahul

Rahul
```

Which one should React delete?

React doesn't know.

So every object needs a unique identity.

We create it using

```jsx
Date.now()
```

which returns the current timestamp.

Every user gets a different id.

---

# Understanding Functional Updates

This line is very important.

```jsx
setUser((prev)=>[
    ...prev,
    newUser
]);
```

Many beginners get confused here.

Let's understand slowly.

Initially

```jsx
user=[]
```

First registration

```jsx
[
    Rahul
]
```

Second registration

React receives

```jsx
prev
```

which is

```jsx
[
    Rahul
]
```

Now

```jsx
[
    ...prev,
    John
]
```

becomes

```jsx
[
    Rahul,
    John
]
```

Nothing is overwritten.

A new array is created.

This is called

## Immutable Update

React loves immutable updates.

We never directly modify the original array.

---

# Rendering Multiple Cards

App contains

```jsx
user.map((elem)=>{
    return <Usercard user={elem}/>
})
```

map()

loops through every object.

If the array has

```jsx
[
 Rahul,
 John,
 David
]
```

React creates

```
<Usercard />

<Usercard />

<Usercard />
```

One card for every user.

---

# Understanding Usercard.jsx

Props received

```jsx
const Usercard=({user,del})=>{}
```

user

contains

```jsx
{
    id,
    image,
    name,
    email,
    password
}
```

Everything displayed on the card comes from this object.

---

# Delete Button

When Delete is clicked

```jsx
onClick={()=>
    del(user.id)
}
```

The card sends its id back to App.

Example

```
Delete User

↓

id = 101
```

Now App knows

which user should be removed.

---

# Understanding filter()

Delete function

```jsx
setUser(prev=>
    prev.filter(
        elem=>elem.id!==id
    )
);
```

Suppose

```jsx
[
 Rahul,
 John,
 David
]
```

Delete John

filter checks every user.

```
Rahul

↓

Keep

John

↓

Remove

David

↓

Keep
```

Final array

```jsx
[
 Rahul,
 David
]
```

React updates the UI automatically.

---

# Why use filter()?

Because

filter()

returns a brand-new array.

React prefers creating new arrays instead of modifying old ones.

---

# Important Concepts Learned

## useState()

Stores data.

Whenever state changes,

React re-renders the component.

---

## Props

Props allow a Parent component to send data to a Child component.

Flow is always

```
Parent

↓

Child
```

---

## Controlled Form

The input values come from React State.

React always knows what the user has typed.

---

## Spread Operator (...)

Copies old data while adding or updating new data.

Without it,

previous values would be lost.

---

## Functional Updates

```jsx
setUser(prev=>...)
```

Always use this when the new state depends on the previous state.

It prevents bugs caused by stale state.

---

## map()

Used to display multiple components from an array.

One object becomes one component.

---

## filter()

Creates a new array by removing unwanted items.

Perfect for Delete operations.

---

## Lifting State Up

If two child components need the same data,

move the state to their common parent.

Then pass it down using props.

---

# Final Flow

```

User Types

↓

changeinput()

↓

formdata updates

↓

Register Click

↓

formsubmit()

↓

newUser object created

↓

setUser()

↓

users array updates

↓

App re-renders

↓

map()

↓

User cards displayed

↓

Delete Click

↓

filter()

↓

Array updates

↓

React re-renders

↓

Card disappears

```

---

# Final Takeaway

This small project teaches some of the most important React concepts.

- Managing form data using Controlled Components
- Storing multiple objects inside an array
- Passing data with Props
- Lifting State Up
- Updating arrays immutably
- Rendering lists using `map()`
- Removing items using `filter()`

