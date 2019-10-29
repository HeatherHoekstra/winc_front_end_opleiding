import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    }; //doet nu niks want cockpit kan niet verwijdert worden
    //http request.. (de hooks voor functie components)
    //compontentdidmount & didupdate in 1
  }, []); // Nu alleen als persons verandert
  //bij leeg array runt alleen als depenencies veranderen.
  //kan meerdere useEffects gebruiken (afzonderlijke functies dan)

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
