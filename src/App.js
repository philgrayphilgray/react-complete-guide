import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    charCount: 0,
    text: ""
  };
  textChangeHandler = event => {
    let newCharCount = event.target.value.length;
    this.setState({
      charCount: newCharCount,
      text: event.target.value
    });
  };
  removeLetterHandler = letterIndex => {
    const txt = [...this.state.text];
    txt.splice(letterIndex, 1);
    this.setState({
      charCount: txt.length,
      text: txt.join("")
    });
  };
  render() {
    const chars = [...this.state.text].map((c, index) => {
      return (
        <CharComponent
          click={() => this.removeLetterHandler(index)}
          key={index}
        >
          {c}
        </CharComponent>
      );
    });
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.text}
        />
        <p>{this.state.charCount}</p>
        <ValidationComponent textLength={this.state.charCount} />
        <p>{this.state.text}</p>
        {chars}
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
