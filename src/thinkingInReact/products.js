import React from "react";
import headers from "./styles/productHeader.module.css";

export default function Product({ data }) {
  return (
    <div>
      <td className={headers.name}>
        {data.stocked ? (
          <span style={{ color: "green" }}>{data.name}</span>
        ) : (
          <span style={{ color: "red" }}>{data.name}</span>
        )}
      </td>
      <td className={headers.price}>
        <span>{data.price}</span>
      </td>
    </div>
  );
}
