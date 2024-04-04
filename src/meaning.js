import React from "react";
import "./dictionary.css";
import Synonyms from "./synonyms";

export default function Meaning(props) {
  return (
    <div className="meanings-main-div">
      <h5 className="fw-bold fs-3">{props.meaning.partOfSpeech}</h5>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <p>
        <strong>Example:</strong> {props.meaning.example}
      </p>
      <div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
