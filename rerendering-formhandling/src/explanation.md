# React Form Handling

## What is Form Handling?

A form is a way to collect information from the user.

Examples:

- Login Form
- Register Form
- Contact Form
- Feedback Form

Whenever a user types something into an input box, React needs a way to store and manage that data.

This process is called **Form Handling**.

---

# Different Ways to Handle Forms in React

There are mainly three ways to handle forms.

1. Brute Force Method
2. Controlled Form
3. React Hook Form (Library)

In this project, we are learning the first two methods.

---

# 1. Brute Force Method

This is the easiest method to understand.

In this method, **every input has its own separate state**.

Example:

```jsx
const [user, setUser] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

Here,

- `user` stores the username.
- `email` stores the email.
- `password` stores the password.

Each input has its own `onChange` function.

Example:

```jsx
onChange={(e) => {
    setUser(e.target.value);
}}
```

Whenever the user types,

```
User types

↓

onChange runs

↓

setUser()

↓

State updates

↓

React re-renders

↓

New value appears on the screen
```

---

## Why is it called the Brute Force Method?

Imagine your form has

- Username
- Email
- Password

You need

```jsx
const [user, setUser] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

Now imagine the form has **20 inputs**.

You would need **20 different useState() variables**.

That means more code to write and maintain.

So this method works, but it becomes repetitive for larger forms.

---

## Understanding the Code

### State

```jsx
const [user, setUser] = useState("");
```

Initially,

```
user = ""
```

Whenever

```jsx
setUser("Rahul");
```

runs,

React updates the state and re-renders the component.

---

### onChange

```jsx
onChange={(e)=>{
    setUser(e.target.value)
}}
```

Here,

`e.target.value`

means

> "Whatever the user has typed inside the input."

If the user types

```
John
```

then

```
e.target.value

↓

John
```

and React stores it inside the `user` state.

---

### Displaying the Value

```jsx
<p>Username : {user}</p>
```

React displays the latest value stored inside `user`.

---

## Advantages

- Easy to understand
- Good for beginners
- Good for small forms

---

## Disadvantages

- Too many `useState()` variables
- Too much repeated code
- Difficult to manage large forms

---

# 2. Controlled Form (Method 1)

Instead of creating one state for every input, we create **one object**.

Example

```jsx
const [formdata, setformdata] = useState({});
```

Now one object stores everything.

Example

```jsx
formdata = {
  name: "John",
  email: "john@gmail.com",
  password: "12345",
};
```

Instead of storing three different variables,

everything is stored inside one object.

---

## Updating the Username

```jsx
setformdata({
  ...formdata,
  name: e.target.value,
});
```

This may look confusing at first, so let's break it down.

### Step 1

Suppose

```jsx
formdata = {
  email: "abc@gmail.com",
};
```

The user types

```
Rahul
```

into the username field.

---

### Step 2

`e.target.value`

becomes

```
Rahul
```

---

### Step 3

```jsx
...formdata
```

copies all the existing values.

So,

```jsx
{
  email: "abc@gmail.com";
}
```

is copied.

---

### Step 4

Then

```jsx
name: e.target.value;
```

adds

```jsx
name: "Rahul";
```

Final object becomes

```jsx
{
    email: "abc@gmail.com",
    name: "Rahul"
}
```

Notice that the email is **not lost**.

The spread operator (`...`) keeps the previous data while updating only the changed field.

---

## Why do we use the Spread Operator?

Without it,

```jsx
setformdata({
  name: "Rahul",
});
```

the old object would be replaced completely.

You would lose

```jsx
email;
password;
```

So we use

```jsx
...formdata
```

to keep the old data.

---

## Advantages

- Only one state
- Easier to manage
- Less repeated code

---

## Disadvantages

Each input still needs its own `onChange` function.

For a large form, there is still some repeated code.

---

# 3. Controlled Form (Method 2)

This is an improved version of the previous method.

Instead of writing three different `onChange` functions, we write only **one**.

---

## The submit Function

```jsx
function submit(e) {
  setformdata({
    ...formdata,
    [e.target.name]: e.target.value,
  });
}
```

This one function updates every input.

---

## Understanding

Suppose the input is

```jsx
<input name="email" onChange={submit} />
```

When the user types

```
abc@gmail.com
```

then

```
e.target.name

↓

email
```

and

```
e.target.value

↓

abc@gmail.com
```

So React creates

```jsx
{
  email: "abc@gmail.com";
}
```

---

If the user types

```
John
```

inside

```jsx
<input name="username" />
```

then

```
e.target.name

↓

username
```

and

```
e.target.value

↓

John
```

React automatically creates

```jsx
{
  username: "John";
}
```

The same function works for every input.

---

## Why do we use Square Brackets?

```jsx
[e.target.name];
```

is called a **computed property name**.

It tells JavaScript,

> "Use the value stored inside `e.target.name` as the key."

Without square brackets,

```jsx
{
    e.target.name: value
}
```

is invalid JavaScript.

With square brackets,

```jsx
{
    [e.target.name]: value
}
```

JavaScript first evaluates `e.target.name`.

If

```jsx
e.target.name = "email";
```

then it becomes

```jsx
{
  email: value;
}
```

This is what makes one function work for every input.

---

# Preventing Page Refresh

Inside a form,

clicking Submit refreshes the page.

React applications usually don't want this because refreshing clears the current state.

To stop the browser's default behavior, we use:

```jsx
function handleReload(e) {
  e.preventDefault();
}
```

`preventDefault()` tells the browser:

> "Do not perform the default form submission."

Instead, React can handle the form submission itself.

---

# Comparison

| Brute Force               | Controlled Form 1         | Controlled Form 2       |
| ------------------------- | ------------------------- | ----------------------- |
| Many `useState()`         | One object                | One object              |
| Many `onChange` functions | Many `onChange` functions | One `onChange` function |
| Good for beginners        | Better                    | Best among these three  |
| More repeated code        | Less repeated code        | Least repeated code     |

---

# Which Method Should You Use?

- **Brute Force Method** is great for learning because it helps you understand how `useState` works.
- **Controlled Form (Method 1)** is better because all the data is stored in one object.
- **Controlled Form (Method 2)** is the most commonly used approach because one function can handle every input.

As your forms become larger, Method 2 keeps your code cleaner, shorter, and easier to maintain.

---

# Final Takeaway

Remember these three ideas:

- **Brute Force Method** → One state for every input.

- **Controlled Form (Method 1)** → One object stores all the input values.

- **Controlled Form (Method 2)** → One object + one generic `onChange` function that updates every field.


