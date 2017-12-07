const initialState = {
  counter: 0
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
      break;
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.payload
      };
      break;
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.payload
      };
      break;
    default:
      return {
        ...state
      };
      break;
  }

  //   if (action.type === "INCREMENT") {
  //     return {
  //       counter: state.counter + 1
  //     };
  //   }

  return state;
};

export default reducers;
