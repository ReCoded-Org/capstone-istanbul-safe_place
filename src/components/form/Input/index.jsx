import React from "react";

export default function Input({ name, type, placeholder, ref, label }) {
  if (!label) {
    return (
      <div className="formInput">
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

  return (
    <div className="formInput">
      <label htmlFor={name}>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          ref={ref}
        />
      </label>
    </div>
  );
}
