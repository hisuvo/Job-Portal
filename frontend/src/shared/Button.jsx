import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`btn text-white bg-[#0088FE] `}>
        {children}
      </button>
    </>
  );
};

export default Button;
