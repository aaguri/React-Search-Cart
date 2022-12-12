import React from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ShoppingCart() {
  const product = products.map((e) => {
    return (
      <>
        <li key={e.id}>{e.title}</li>
        <li key={e.id}>{e.isFruit}</li>
      </>
    );
  });
  return <div>{product}</div>;
}

export default ShoppingCart;
