import React from "react";

const style = {
  width: "100%",
  fontSize: "2em"
};

const userInput = props => {
  return (
    <div className="UserInput">
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        style={style}
      />
    </div>
  );
};
export default userInput;
