# Explanation

In this practice project, I used `useState` to understand how state works in React. I also used **props** to understand how data is passed from a parent component to a child component.

The application stores an array of product objects inside `useState` in the `App` component. Each object contains information about a product, such as its `id`, `title`, `price`, and `image`.

The products are displayed by using the `map()` method. For every product in the array, the `Productcard` component is rendered.

The parent (`App`) passes two props to the child (`Productcard`):

- `product` – contains the data of a single product.
- `del` – contains the delete function.

Inside the `Productcard` component, the product details are displayed using properties such as `product.title`, `product.price`, and `product.image`.

When the user clicks the **Delete** button, the following function is executed:

```jsx
del(product.id);
```

Here, `product.id` is passed as an argument to the `del` function that is defined in the `App` component.

The `del` function accepts the product ID as its parameter. It then uses the `filter()` method to create a new array that contains every product except the one whose ID matches the clicked product.

```jsx
const delprod = product.filter((elem) => elem.id !== id);
```

Finally, the new array is passed to `setProduct()`.

```jsx
setProduct(delprod);
```

Calling `setProduct()` updates the state. Whenever the state changes, React automatically re-renders the component, causing the deleted product to disappear from the UI.

This project helped me understand:

- How `useState` stores and updates state.
- How data is passed from a parent component to a child component using props.
- How functions can also be passed as props.
- How child components can communicate with the parent by calling a function received through props.
- How `map()` is used to render lists of components.
- How `filter()` creates a new array without modifying the original array.
- How updating state causes React to re-render the UI.
