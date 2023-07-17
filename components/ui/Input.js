import React from "react";
import { ErrorMessage, useField } from "formik";

const Input = ({ name, type, id, label, value, onChange, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col">
      <label htmlFor={id}> {label} </label>
      <input
        className={`tracking-widest text-lg p-3 border ${
          meta.touched && meta.error ? "border-red-500" : "border-green-500"
        }  rounded-md outline-none`}
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        {...field}
        {...props}
      />
      <ErrorMessage className="text-danger" name={field.name} component="div" />
    </div>
  );
};

export default Input;
