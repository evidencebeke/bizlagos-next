import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-green-500 tracking-wider text-white py-2 rounded px-7 self-start">
      {children}
    </button>
  );
};

export default Button;
