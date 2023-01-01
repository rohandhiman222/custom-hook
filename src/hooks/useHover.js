import React, { useMemo, useState } from "react";

export const useHover = () => {
  const [isHover, setHover] = useState(false);
  console.log("ishoverd", isHover);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setHover(true),
      onMouseLeave: () => setHover(false),
    };
  }, []);
  return [isHover, bind];
};
