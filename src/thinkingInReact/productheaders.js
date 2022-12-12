import React from "react";
import headers from "./styles/productHeader.module.css";
import Product from "./products";

export default function Productheaders({ searchData, instock, data }) {
  let rows = [];
  let lastcat = null;
  data.forEach((cat) => {
    if (cat.name.toLowerCase().indexOf(searchData.toLowerCase()) === -1) {
      return;
    }

    if (instock && !cat.stocked) {
      return;
    }
    if (cat.category !== lastcat) {
      rows.push(cat.category);
    }
    rows.push(<Product data={cat} key={cat.name} />);
    lastcat = cat.category;
  });
  console.log(rows);
  return (
    <div className={headers.header}>
      {rows.map((e) => {
        return (
          <table>
            <thead>
              <th>{e}</th>
            </thead>
          </table>
        );
      })}
    </div>
  );
}
