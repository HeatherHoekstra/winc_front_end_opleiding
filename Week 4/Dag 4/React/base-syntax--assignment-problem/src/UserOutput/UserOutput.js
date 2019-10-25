import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="userOutput">
      <p>Wie ben je?</p>
      <p>Je gebruikersnaam is: {props.name}</p>
    </div>
  );
};

export default userOutput;
