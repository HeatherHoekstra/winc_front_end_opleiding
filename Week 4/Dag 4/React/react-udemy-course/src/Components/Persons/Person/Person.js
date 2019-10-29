import React from "react";
import classes from "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";

const person = props => {
  console.log("[Person.js] rendering...");
  return (
    <Auxiliary>
      <div className={classes.Person}>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </Auxiliary>
  );
};

export default person;
