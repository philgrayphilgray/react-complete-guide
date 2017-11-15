import React from "react";
import "./UserOutput.css";
const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>{props.children}</p>
      <p onClick={props.click}>
        <span className="username">{props.userName}</span>: "Lorem Ipsum"
      </p>
    </div>
  );
};
export default userOutput;
