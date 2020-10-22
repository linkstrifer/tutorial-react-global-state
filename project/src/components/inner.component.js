import React from "react";
import { useStore } from "../store";

export default function InnerComponent() {
  const [state] = useStore();

  return <span>Inner Counter: {state.count}</span>;
}
