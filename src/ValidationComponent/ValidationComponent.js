import React from "react";
import "./style.css";
const validationComponent = props => {
  const validationText = () => {
    if (props.textLength < 5) {
      return <span className="warning">Text too short!</span>;
    } else {
      return <span className="success">Text long enough.</span>;
    }
  };
  return (
    <div className="ValidationComponent">
      <p>{validationText()}</p>
    </div>
  );
};

export default validationComponent;
