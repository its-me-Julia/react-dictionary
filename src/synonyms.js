import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="list-group list-group-horizontal list-unstyled">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
