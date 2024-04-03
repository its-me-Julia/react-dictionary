import React from "react";
import Meaning from "./meaning";

export default function Results(props) {
  if (props.result) {
    console.log(props.result);
    return (
      <div className="text-start">
        <h2>{props.result.word}</h2>
        <h3>{props.result.phonetic}</h3>
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
    return "Maybe you misspeled a word you are looking for. Please, try again.";
  }
}
