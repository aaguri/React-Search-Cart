import React from "react";
import card from "./styles/productCard.module.css";
import Productheaders from "./productheaders";

export default function ProductCard({ searchData, instock, data }) {
  return (
    <div className={card.productTable}>
      <div className={card.table}>
        <h1>Name</h1>
        <h1>Price</h1>
      </div>
      <Productheaders searchData={searchData} instock={instock} data={data} />
    </div>
  );
}
