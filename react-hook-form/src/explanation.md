# React Hook Form

# Project Overview

This project is a simple **User Registration Application** built using **React Hook Form**.

The application allows the user to

- Fill the registration form
- Validate the inputs
- Add the user to an array
- Display every user as a card

Unlike the previous project, we **do not use useState() to store the input values**.

Instead, React Hook Form manages the form for us.

---

# Why React Hook Form?

Let's understand the problem first.

In a Controlled Form, every key press does this

```
User Types

↓

onChange()

↓

setState()

↓

React Re-renders

↓

UI Updates
```

Imagine a form with 30 inputs.

Every key press causes React to re-render.

Although React is fast, this becomes unnecessary work.

React Hook Form solves this problem.

It lets the browser manage the input values and only gives React the data when it is needed.

---

# How React Hook Form Works

```
User Types

↓

Browser Stores Values

↓

React Hook Form Watches Inputs

↓

Submit Button Clicked

↓

Validation Runs

↓

submit(data)

↓

User Added
```

Unlike Controlled Forms,

React does not update state after every key press.

---

# Project Structure

```
App.jsx
│
├── Reacthookform.jsx
│
└── Usercart.jsx
```

---

# Understanding App.jsx

The App component stores all registered users.

```jsx
const [user, setUser] = useState([]);
```

Initially

```jsx
user = [];
```

Every submitted user will be added to this array.

App passes

```jsx
setUser;
```

to

```
Reacthookform.jsx
```

using props.

---

# Understanding useForm()

The most important line is

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm();
```

React Hook Form gives us these functions.

Each one has a different job.

---

# register()

Every input contains

```jsx
{...register("name")}
```

What does register do?

It tells React Hook Form

> "Watch this input."

Example

```jsx
<input {...register("name")} />
```

Now React Hook Form knows

- this input exists
- its value
- its validation rules

Without register(),

React Hook Form cannot manage the input.

---

# Why Spread Operator?

Notice

```jsx
{...register("name")}
```

register()

returns an object.

The spread operator puts that object inside the input.

React Hook Form automatically adds everything it needs.

You don't have to write

```jsx
value;

onChange;

onBlur;

ref;
```

React Hook Form handles them internally.

---

# Validation

Register also accepts validation rules.

Example

```jsx
register("name", {
  required: "Name is required",
});
```

Now

if the user leaves the input empty,

React Hook Form automatically creates an error.

No extra code is required.

---

# Pattern Validation

Example

```jsx
pattern:{
    value:/^\S.*$/,
    message:"Blank spaces not allowed"
}
```

This checks

whether the entered value follows a pattern.

If not,

the custom error message is shown.

---

# MinLength and MaxLength

Example

```jsx
minLength:{
    value:10,
    message:"Minimum of 10 digits are required"
}
```

React Hook Form checks

whether the entered value satisfies the rule.

If not,

it automatically creates an error.

---

# Understanding Errors

Errors come from

```jsx
formState;
```

Inside

```jsx
errors;
```

Example

```jsx
errors.name;
```

If there is no error

```
errors.name

↓

undefined
```

If there is an error

```
errors.name

↓

{
    message:"Name is required"
}
```

That is why we write

```jsx
errors.name &&
```

React first checks

whether an error exists.

If it does,

it displays

```jsx
errors.name.message;
```

---

# handleSubmit()

The form contains

```jsx
<form onSubmit={handleSubmit(submit)}>
```

Many beginners think

```
submit()
```

runs immediately.

It does NOT.

React Hook Form works like this

```
Submit Click

↓

Validation

↓

Everything Valid?

↓

Yes

↓

submit(data)
```

If validation fails,

submit()

never runs.

---

# Understanding submit()

```jsx
const submit=(data)=>{
```

React Hook Form automatically creates

```jsx
data;
```

Example

```jsx
{
    name:"Rahul",
    email:"abc@gmail.com",
    number:"9876543210",
    image:"image.png"
}
```

Notice

You did not create this object.

React Hook Form created it for you.

---

# Creating User Object

Inside submit

```jsx
let userobj = {
  name: data.name,
  email: data.email,
  number: data.number,
  image: data.image,
};
```

This creates one user object.

Then

```jsx
setUser((prev) => [...prev, userobj]);
```

adds it to the users array.

---

# Functional Updates

Instead of

```jsx
setUser([...user, userobj]);
```

we write

```jsx
setUser((prev) => [...prev, userobj]);
```

Why?

Because the next state depends on the previous state.

This is the recommended React approach.

---

# reset()

React Hook Form also provides

```jsx
reset();
```

Calling

```jsx
reset();
```

clears every input automatically.

Instead of writing

```jsx
setFormData({
    ...
})
```

React Hook Form handles it for us.

---

# Understanding Usercard

App contains

```jsx
user.map((elem) => {
  return <Usercart user={elem} />;
});
```

map()

loops through every object.

If there are

3 users,

React creates

```
<Usercart/>

<Usercart/>

<Usercart/>
```

Each card receives

one object

through props.

---

# Why React Hook Form is Faster?

Controlled Form

```
User Types

↓

setState()

↓

Render

↓

setState()

↓

Render

↓

setState()

↓

Render
```

React Hook Form

```
User Types

↓

Browser Stores Values

↓

React Hook Form Watches

↓

No Unnecessary Re-render
```

Only when

Submit

is clicked,

React receives the complete data.

---

# Controlled Form vs React Hook Form

| Controlled Form             | React Hook Form          |
| --------------------------- | ------------------------ |
| Uses useState               | Uses useForm             |
| Needs onChange              | No onChange required     |
| Needs value                 | No value required        |
| Re-renders every key press  | No unnecessary re-render |
| More code                   | Less code                |
| Validation written manually | Validation built-in      |

---

# Important Concepts Learned

## useForm()

Creates the form controller.

---

## register()

Registers every input with React Hook Form.

---

## handleSubmit()

Validates the form before calling submit().

---

## errors

Stores validation errors.

---

## reset()

Clears the complete form.

---

## Functional Updates

Always use

```jsx
setUser(prev=>...)
```

when the next state depends on the previous state.

---

## map()

Converts an array into multiple React components.

---

## Props

Allows Parent Components to send data to Child Components.

---

# Complete Project Flow

```
User Opens Form

↓

Types Data

↓

React Hook Form Tracks Inputs

↓

Submit Click

↓

Validation Runs

↓

submit(data)

↓

User Object Created

↓

setUser()

↓

Users Array Updates

↓

App Re-renders

↓

map()

↓

User Cards Displayed
```

---

# Final Takeaway

This project introduces **React Hook Form**, a library that makes form handling easier and more efficient.

The biggest advantage is that **you don't need to manually manage every input with `useState` and `onChange`**.

Instead:

- `register()` connects the input.
- `handleSubmit()` validates the form.
- `errors` stores validation messages.
- `reset()` clears the form.
- React Hook Form creates the final `data` object automatically.

For small forms, a Controlled Form works well.

For medium and large forms, **React Hook Form is usually the better choice because it requires less code, provides built-in validation, and avoids unnecessary re-renders.**
