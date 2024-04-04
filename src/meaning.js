import React from "react";
import "./dictionary.css";
import Synonyms from "./synonyms";

export default function Meaning(props) {
  if (props.meaning.example) {
    return (
      <div className="meanings-main-div">
        <h5 className="fw-bold fs-3">{props.meaning.partOfSpeech}</h5>
        <div className="definition-example-div">
          <p className="fs-6 fw-semibold">{props.meaning.definition}</p>
          <p className="fst-italic example">{props.meaning.example}</p>
        </div>
        <div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="meanings-main-div">
        <h5 className="fw-bold fs-3">{props.meaning.partOfSpeech}</h5>
        <p className="fs-6 fw-semibold">{props.meaning.definition}</p>
        <div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    );
  }
}
