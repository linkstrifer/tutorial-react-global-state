import React from "react";
import "./App.css";
import { Store, useStore } from "./store";

import CounterReducer from "./store/counter.reducer";

import InnerComponent from "./components/inner.component";
import WrapperComponent from "./components/wrapper.component";

function App() {
  const [state, dispatch] = useStore();

  return (
    <div className="app">
      <InnerComponent />
      <WrapperComponent />
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
    </div>
  );
}

export default () => (
  <div>
    <Store initialState={{ count: 0 }} reducer={CounterReducer}>
      <App />
    </Store>
    <Store initialState={{ count: 1 }} reducer={CounterReducer}>
      <App />
    </Store>
  </div>
);
