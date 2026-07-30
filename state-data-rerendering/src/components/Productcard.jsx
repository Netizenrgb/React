import React from "react";

const Productcard = ({ product, del }) => {
  return (
    <div>
      <div className="border-2 rounded-2xl p-1">
        <div>
          <img src={product.image} />
        </div>
        <p>{product.title}</p> <br />
        <p>price {product.price}</p>
        <br />
        <p
          onClick={() => {
            del(product.id);
          }}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default Productcard;
