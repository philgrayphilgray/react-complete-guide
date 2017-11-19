import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }
  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Person.js] inside componentDidMount()");
  }
  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log("I'm about to be removed!");
  }
  render() {
    console.log("[Person.js] inside render()");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am{" "}
          {Math.floor(Math.random() * this.props.age)} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, styles.Person);
