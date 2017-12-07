const initialState = {
  uniqueId: 0,
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const newID = state.uniqueId + 1;
      const newPerson = {
        id: newID,
        name: "Phil",
        age: Math.floor(Math.random() * 40)
      };
      return {
        ...state,
        uniqueId: newID,
        persons: state.persons.concat(newPerson)
      };
    case "DELETE_PERSON":
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
