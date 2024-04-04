import React from "react";
import Meaning from "./meaning";
import "./dictionary.css";

export default function Results(props) {
  if (props.result) {
    console.log(props.result);
    return (
      <div>
        <div className="results-content-div">
          <h2 className="text-capitalize">{props.result.word}</h2>
          <h3 className="fw-light">
            [ <span className=" fst-italic">{props.result.phonetic}</span> ]
          </h3>
        </div>
        <div>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
