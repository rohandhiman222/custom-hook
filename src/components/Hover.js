import React, { useMemo, useState } from "react";
import { useHover } from "../hooks";
import { useMeasure } from "../hooks/useMeasure";

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

  const [{ ref }, bounds] = useMeasure();

  console.log(bounds);

  return (
    <div>
      <div
        ref={ref}
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
