import React, { useContext } from "react";
import { AppContext } from "./PageWrapper";

export const Nav = () => {
  const { isMenuOpen, toggle } = useContext(AppContext);

  if (!isMenuOpen) return null;

  return (
    <div
      style={{
        background: "green",
        color: "white",
        position: "fixed",
        width: "100vh",
        height: "100vh",
        left: 0,
        right: 0,
      }}
    >
      <h1>Hello</h1>
      <button onClick={toggle}>Close</button>
    </div>
  );
};
