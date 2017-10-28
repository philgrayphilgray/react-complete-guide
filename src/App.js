import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Phil", age: 30 },
      { name: "Bob", age: 50 },
      { name: "Cheongah", age: 29 }
    ]
  };
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Boba", age: 530 },
        { name: "Cheongahz", age: 29 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>HI I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "Phillip")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Phil!")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "Hi im react")
    // );
  }
}

export default App;
