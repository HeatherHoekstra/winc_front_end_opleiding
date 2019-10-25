import React from "react";
import "./Characters.css";

const characters = props => {
  return (
    <div className="characters" onClick={props.clicked}>
      {props.character}
    </div>
  );
};
export default characters;
