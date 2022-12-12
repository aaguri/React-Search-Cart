import React from "react";
import newApp from "./styles/newApp.module.css";
import SearchBar from "./searchbar";
import ProductCard from "./productcard";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function NewApp() {
  const [searchData, setSearchData] = React.useState("");
  const [instock, setInstock] = React.useState(false);
  return (
    <div className={newApp.App}>
      <SearchBar
        searchData={searchData}
        instock={instock}
        setSearchData={setSearchData}
        setInstock={setInstock}
      />
      <ProductCard searchData={searchData} instock={instock} data={data} />
    </div>
  );
}

export default NewApp;
