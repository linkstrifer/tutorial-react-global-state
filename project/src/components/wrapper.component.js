import React from "react";
import InnerComponent from "./inner.component";

export default function WrapperComponent() {
  return (
    <div>
      Wrapped <InnerComponent />
    </div>
  );
}
