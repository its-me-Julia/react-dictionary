import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Results from "./results";
import "bootstrap/dist/css/bootstrap.css";

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
      <form
        onSubmit={startEngine}
        className="dictionary-main-div d-flex justify-content-between"
      >
        <input
          className="search-bar col-8 m-auto"
          onChange={handleSearchValue}
          autoFocus={true}
          type="search"
          placeholder="Type a word you want to look up"
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn btn-light col-3"
        ></input>
      </form>
      <div className="results-main-div">
        <Results result={result} />
      </div>
    </div>
  );
}
