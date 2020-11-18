import React from "react";

/**
 * custom version of the input tag
 * @param {string} name - input name and id
 * @param {string} type - input type (text, email, ...etc)
 * @param {string} placeholder - input placeholder
 * @param {string} ref - React ref to use with register() form function or any ref
 * @param {string} label - (optional) if exist, label tag will be added with the name givien
 */
export default function Input({ name, type, placeholder, ref, label }) {
  return (
    <div className="formInput">
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
      />
    </div>
  );
}
