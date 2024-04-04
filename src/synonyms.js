import React from "react";
import "./dictionary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="synonyms-main-div">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
