import React from "react";
import "./dictionary.css";
import Synonyms from "./synonyms";

export default function Meaning(props) {
  return (
    <div className="text-start">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <p>
        <strong>Example:</strong> {props.meaning.example}
      </p>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
