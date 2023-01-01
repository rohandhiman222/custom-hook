// import React from "react";
// import { useToggle } from "../hooks/useToggle";
// import { useToggle1 } from "../hooks/useToggle1";
// import { useToggle2 } from "../hooks/useToggle2";
// import { useToggle3 } from "../hooks/useToggle3";

import { useToggle, useToggle3 } from "../hooks";

export default function Toggle() {
  //   const [isToggled, setToggle] = useState(false);
  //   const [isToggled, setToggle] = useToggle1(false);

  // array you can choose any name there is option but not in object
  //   array i have to use all i don't have because all return
  //   const [isToggled, setToggle, toggle] = useToggle2(false);

  // this is object can only as i want
  //   you have to use same name you can't use another name like array
  //   const { isToggled, toggle } = useToggle3(false);
  // solution rename object
  const { isToggled: isToggled, toggle } = useToggle3(false);
  const hello = useToggle();
  return (
    <div>
      {hello}
      {/* <button onClick={() => setToggle((prevState) =>{
        return !prevState
      })}> */}
      {/* <button onClick={() => setToggle((prevState) => !prevState)}> */}
      <button onClick={toggle}>
        Toggle
        <br />
        {isToggled && <p> To be toggled </p>}
      </button>
    </div>
  );
}
