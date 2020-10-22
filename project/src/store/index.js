import React from "react";
import { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();

export const Store = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(StoreContext);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const [state, dispatch] = useContext(StoreContext);

  return [
    state,
    (action) => {
      console.table(action);
      dispatch(action);
    },
  ];
};
