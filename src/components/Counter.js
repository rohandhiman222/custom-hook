import React from "react";
import { useCounter } from "../hooks";

export const Counter = () => {
  const [value, { dec, inc }] = useCounter();
  return (
    <div>
      <button onClick={inc}>+</button>
      {value}
      <button onClick={dec}>-</button>
    </div>
  );
};
