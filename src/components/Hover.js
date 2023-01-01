import React, { useMemo, useState } from "react";
import { useHover } from "../hooks";

export const Hover = () => {
  /*  const [isHover, setHover] = useState(false);
  console.log("ishoverd", isHover);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setHover(true),
      onMouseLeave: () => setHover(false),
    };
  }, []); */
  const [isHover, bind] = useHover();

  return (
    <div>
      <div
        {...bind}
        style={{
          width: 200,
          height: 200,
          backgroundColor: isHover ? "green" : "blue",
          color: isHover ? "black" : "white",
        }}
      >
        <h2>Hello man1</h2>
      </div>
    </div>
  );
};
