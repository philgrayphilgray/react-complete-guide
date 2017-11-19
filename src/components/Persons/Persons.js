import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }
  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount()");
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Person.js] Inside componentWillReceiveProps",
      nextProps
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside shouldComponentUpdate",
      nextProps,
      nextState
    );
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    );
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] Inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={event => this.props.nameChangedHandler(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
