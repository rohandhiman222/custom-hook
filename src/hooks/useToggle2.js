import { useState } from "react";
export const useToggle2 = (intial) => {
  const [isToggled, setToggle] = useState(intial);
  const toggle = () => setToggle((prevState) => !prevState);
  return [isToggled, setToggle, toggle];
};
