import React from "react";

const userInput = props => {
  const style = {
    border: "3px dotted black",
    borderRadius: "44px 44px 44px 44px",
    fontFamily: "arial",
    fontSize: "20px",
    backgroundColor: "grey",
    width: "200px",
    margin: "35px"
  };

  return (
    <div className="userInput">
      <input
        type="text"
        onChange={props.change}
        value={props.name}
        style={style}
      />
    </div>
  );
};

export default userInput;
