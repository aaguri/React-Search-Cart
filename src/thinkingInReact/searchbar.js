import React from "react";
import searchBar from "./styles/searchbar.module.css";

export default function SearchBar({
  searchData,
  instock,
  setSearchData,
  setInstock,
}) {
  function Onsubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={searchBar.main}>
      <form onSubmit={(e) => Onsubmit(e)}>
        <input
          className={searchBar.searchfeild}
          type="search"
          value={searchData}
          placeholder="search here..."
          name="search"
          onChange={(e) => setSearchData(e.target.value)}
        ></input>
        <label htmlFor="checkbox">
          <input
            id="checkbox"
            onChange={(e) => setInstock(e.target.checked)}
            type="checkbox"
            checked={instock}
            name="checkbox"
          ></input>
          only show products in stock
        </label>
      </form>
    </div>
  );
}
