import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Results from "./results";

export default function Dictionary() {
  let [searchValue, setSearchValue] = useState("");
  let [result, setResult] = useState(null);

  function fetchResponse(response) {
    console.log(response.data);
    setResult(response.data);
  }

  function handleSearchValue(event) {
    setSearchValue(event.target.value);
  }

  function startEngine(event) {
    event.preventDefault();

    let apiKey = "b2dt6f634c03ca0b6c80o88e820fa880";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchValue}&key=${apiKey}`;

    axios.get(apiUrl).then(fetchResponse);
  }

  return (
    <div>
      <form onSubmit={startEngine}>
        <input
          onChange={handleSearchValue}
          autoFocus={true}
          type="search"
          placeholder="Type a word you want to look up"
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <Results result={result} />
    </div>
  );
}
