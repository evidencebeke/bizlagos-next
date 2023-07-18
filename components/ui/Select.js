import React from "react";
import { ErrorMessage, useField } from "formik";
import json from "../../data/listings.json";

const Select = ({ name, id, label, value, onChange, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col text-capitalize">
      <label htmlFor={id}> {label} </label>
      <select
        className={`tracking-widest w-full mt-1 text-lg p-3 transition-all duration-500 border ${
          meta.touched && meta.error ? "border-red-500" : "border-green-500"
        }  rounded-md outline-none`}
        id={id}
        onChange={onChange}
        value={value}
        {...field}
        {...props}
      >
        <option value="">Select a job type</option>
        {json.map((item, index) => (
          <option value={item} key={index}>
            {" "}
            {item}{" "}
          </option>
        ))}
      </select>
      <ErrorMessage
        className="text-red-600"
        name={field.name}
        component="div"
      />
    </div>
  );
};

export default Select;
