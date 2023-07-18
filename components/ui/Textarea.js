import React from "react";
import { ErrorMessage, useField } from "formik";
const Textarea = ({ name, id, label, value, onChange, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col ">
      <label htmlFor={id}> {label} </label>
      <textarea
        className={`tracking-widest mt-1 resize-none w-full text-lg p-3 border transition-all duration-500 ${
          meta.touched && meta.error ? "border-red-500" : "border-green-500"
        }  rounded-md outline-none`}
        id={id}
        onChange={onChange}
        value={value}
        {...field}
        {...props}
      ></textarea>
      <ErrorMessage
        className="text-red-600"
        name={field.name}
        component="div"
      />
    </div>
  );
};

export default Textarea;
