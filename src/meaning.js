import React from "react";
import "./dictionary.css";

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
        <strong>Synonyms:</strong> {props.meaning.synonyms}
      </p>
    </div>
  );
}
