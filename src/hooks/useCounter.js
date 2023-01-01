import { useState } from "react";

export const useCounter = (intial) => {
  const [value, setValue] = useState((intial = 0));

  const inc = () => {
    setValue((prevState) => prevState + 1);
  };

  const dec = () => {
    setValue((prevState) => prevState - 1);
  };

  return [value, { inc, dec }];
};
