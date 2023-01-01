import { useState } from "react";
export const useToggle3 = (intial) => {
  const [isToggled, setToggle] = useState(intial);
  const toggle = () => setToggle((prevState) => !prevState);
  // only can only access one if you don't need it
  return { isToggled, setToggle, toggle };
};
