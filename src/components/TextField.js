import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("field:", field); //details about fields;
  // console.log("meta", meta) //details about field clicked foucused , error details;
  return (
    <div className=" mb-2">
      <label htmlFor={field.name}>{label}</label><span style={{ color: "red" }}>*</span>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
