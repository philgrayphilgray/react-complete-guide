import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.addPersonHandler} />
        {this.props.globalPersons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.deletePersonHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    globalPersons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePersonHandler: id =>
      dispatch({ type: "DELETE_PERSON", removeId: id }),
    addPersonHandler: () => dispatch({ type: "ADD_PERSON" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
