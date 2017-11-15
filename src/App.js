import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [{ name: "Phil" }, { name: "Ken" }]
  };
  reverseName = () => {
    const reversed = this.state.users.map(u =>
      u.name
        .split("")
        .reverse()
        .join("")
    );
    this.setState({
      users: [{ name: reversed[0] }, { name: reversed[1] }]
    });
  };
  nameChangeHandler = event => {
    const reversedInput = event.target.value.toUpperCase();
    this.setState({
      users: [{ name: reversedInput }, { name: event.target.value }]
    });
  };
  style = {
    textDecoration: "line-through"
  };
  render() {
    return (
      <div className="App">
        <UserInput
          name={this.state.users[0].name}
          changed={this.nameChangeHandler}
        />
        <UserOutput
          userName={this.state.users[0].name}
          click={this.reverseName}
        >
          Scene 1
        </UserOutput>
        <UserOutput
          userName={this.state.users[1].name}
          click={this.reverseName}
        >
          Scene 2
        </UserOutput>
        <ol style={this.style}>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>
            UserInput should hold an input element, UserOutput two paragraphs
          </li>
          <li>
            Output multiple UserOutput components in the App component (any
            paragraph texts of your choice)
          </li>
          <li>
            Pass a username (of your choice) to UserOutput via props and display
            it there
          </li>
          <li>
            Add state to the App component (=> the username) and pass the
            username to the UserOutput component
          </li>
          <li>
            Add a method to manipulate the state (=> an event-handler method)
          </li>
          <li>
            Pass the event-handler method reference to the UserInput component
            and bind it to the input-change event
          </li>
          <li>
            Ensure that the new input entered by the user overwrites the old
            username passed to UserOutput
          </li>
          <li>
            Add two-way-binding to your input (in UserInput) to also display the
            starting username
          </li>
          <li>
            Add styling of your choice to your components/ elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
