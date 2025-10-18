import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`btn text-white btn-info `}>
        {children}
      </button>
    </>
  );
};

export default Button;
