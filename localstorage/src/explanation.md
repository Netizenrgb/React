# User Management System (CRUD using Local Storage)

## Project Overview

## How the Project Works

User
↓
Form
↓
Create User
↓
Save in State
↓
Save in Local Storage
↓
Display Cards

---

## What is CRUD?

Create
Read
Update
Delete

---

## Project Structure

App.jsx
Navbar.jsx
Hookform.jsx
Usercart.jsx

---

## Understanding App.jsx

- Why userdata is stored in App
- Why we initialize useState using a function
- Why JSON.parse()
- Why || [] is needed
- What happens after page refresh

---

## Understanding Local Storage

What is Local Storage?

Difference between State and Local Storage

State
↓

Temporary

Local Storage
↓

Permanent

Why JSON.stringify()

Why JSON.parse()

How data is stored

Before

[]

After

[
{...},
{...}
]

---

## Create Logic

submit()

↓

Create Object

↓

Add to Array

↓

setUserdata()

↓

localStorage.setItem()

↓

React Re-renders

---

## Reading from Local Storage

How

JSON.parse(localStorage.getItem())

works

Why the form still displays after refresh

---

## Delete Logic

Delete Button

↓

id sent

↓

filter()

↓

New Array

↓

State Updated

↓

Local Storage Updated

↓

UI Updated

Explain why filter() is used.

---

## Update Logic

Update Button

↓

updateduser gets current object

↓

toggle opens form

↓

defaultValues fill inputs

↓

Submit

↓

map()

↓

Replace only matching user

↓

Keep remaining users unchanged

Explain why map() is used instead of filter().

---

## Toggle Logic

Why toggle exists

true

↓

Show Form

false

↓

Hide Form

---

## Conditional Rendering

Why

{toggle && <Hookform />}

works

---

## Functional Updates

Why

setUserdata(prev => ...)

is preferred

---

## Project Flow Diagram

Application Start

↓

Read Local Storage

↓

Display Users

↓

Create / Update / Delete

↓

Update State

↓

Update Local Storage

↓

UI Re-renders

---

## Important Concepts Learned

useState

Props

CRUD

Local Storage

map()

filter()

Conditional Rendering

Functional Updates

Toggle State

---

## Final Takeaway

This project combines several important React concepts into one complete application.

Instead of creating a simple form, we built a **CRUD (Create, Read, Update, Delete)** application that also stores data permanently using **Local Storage**.

By completing this project, you learned how to:

- Create new users and store them inside an array.
- Display multiple users using `map()`.
- Delete users using `filter()`.
- Update existing users using `map()`.
- Store data permanently using `localStorage`.
- Load saved data when the application starts.
- Convert JavaScript objects into strings using `JSON.stringify()`.
- Convert strings back into JavaScript objects using `JSON.parse()`.
- Share data between components using **Props**.
- Control the visibility of components using **Conditional Rendering**.
- Use a **toggle state** to show and hide the form.
- Update state safely using **Functional Updates**.

One of the biggest lessons from this project is understanding the difference between **React State** and **Local Storage**.

### React State

- Stores data temporarily.
- Data is lost when the page refreshes.
- Causes React to re-render whenever it changes.

### Local Storage

- Stores data permanently inside the browser.
- Data remains even after refreshing or closing the browser.
- Does **not** automatically update the UI.
