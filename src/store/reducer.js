import * as actionTypes from "./actionTypes";

const initialState = {
  uniqueId: 0,
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newID = state.uniqueId + 1;
      const newPerson = {
        id: newID,
        name: action.personData.name,
        age: action.personData.age
      };
      return {
        ...state,
        uniqueId: newID,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.DELETE_PERSON:
      const filteredPersons = state.persons.filter(
        person => person.id !== action.removeId
      );
      return {
        ...state,
        persons: filteredPersons
      };
  }
  return state;
};

export default reducer;
