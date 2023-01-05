import React from "react";
import { useScript } from "../hooks/useScript";

export const ScriptComponent = () => {
  const [isLoaded, isError] = useScript(
    "https://www.google.com/recaptcha/api.js"
  );

  console.log("script is loaded", isLoaded, isError);

  if (!isLoaded) {
    return null;
  }
  return <div>ScriptComponent</div>;
};
