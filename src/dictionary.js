import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Results from "./results";
import Images from "./images";
import "bootstrap/dist/css/bootstrap.css";

export default function Dictionary() {
  let [searchValue, setSearchValue] = useState("");
  let [result, setResult] = useState(null);
  let [image, setImage] = useState(null);

  function fetchImages(response) {
    console.log(response.data);
    setImage(response.data);
  }

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

    let imagesApiKey = "b2dt6f634c03ca0b6c80o88e820fa880";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchValue}&key=${imagesApiKey}`;

    axios.get(imagesApiUrl).then(fetchImages);
  }

  return (
    <div>
      <div className="dictionary-main-div">
        <h1>Which word do you want to look up?</h1>
        <form
          onSubmit={startEngine}
          className=" d-flex justify-content-between"
        >
          <input
            className="search-bar col-8 m-auto"
            onChange={handleSearchValue}
            autoFocus={true}
            type="search"
            placeholder="Type a word here"
          ></input>
          <input
            type="submit"
            value="Search"
            className="btn btn-light col-3"
          ></input>
        </form>
      </div>
      <div className="results-main-div">
        <Results result={result}/>
        <Images image={image} />
      </div>
    </div>
  );
}
