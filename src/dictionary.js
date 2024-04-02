import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [searchValue, setSearchValue] = useState("");

  function handleSearchValue(event) {
    setSearchValue(event.target.value);
  }

  function startEngine(event) {
    event.preventDefault();
    alert(`Searching for ${searchValue}`);
  }

  return (
    <form onSubmit={startEngine}>
      <input
        onChange={handleSearchValue}
        autoFocus={true}
        type="search"
        placeholder="Type a word you want to look up"
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );
}
