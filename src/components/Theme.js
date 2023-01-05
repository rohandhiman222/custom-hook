import React from "react";
import { useTheme } from "../hooks/useTheme";

export const Theme = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div>
      current theme {theme}
      <select
        name=''
        defaultValue={theme}
        onChange={(e) => setTheme(e.target.value)}
        id=''
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
};
