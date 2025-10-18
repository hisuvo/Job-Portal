import React, { useState } from "react";

const useToggle = (initialToggle = "") => {
  const [isOn, setIsOne] = useState(initialToggle);

  const open = () => setIsOne(true);
  const close = () => setIsOne(false);

  return { isOn, open, close };
};

export default useToggle;
