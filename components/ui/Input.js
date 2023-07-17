import React from "react";

const Input = ({ type, id, label, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}> {label} </label>
      <input
        className="tracking-widest text-lg p-3 border border-green-500 rounded-md outline-none"
        type={type}
        id={id}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
