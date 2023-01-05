import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Local = () => {
  const [value, setValue] = useLocalStorage("tokenStore", "test1111");
  return (
    <div>
      <h1>{value || ""}</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
