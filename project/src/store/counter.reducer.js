export default function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const newState = { ...state };

      newState.count++;

      return newState;
    }
    default:
      return state;
  }
}
