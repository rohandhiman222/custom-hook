import { useState } from "react";
export const useToggle1 = (intial) => {
  const [isToggled, setToggle] = useState(intial);
  return [isToggled, setToggle];
};
